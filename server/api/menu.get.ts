import {CategoryGroup, CategoryGroupContent, Collection, GroupType, MenuDto} from "~/types/api/category";

export default defineEventHandler(async (): Promise<MenuDto> => {
  const cache = useStorage('fs')
  let navigationArr = await cache.getItem('navigationArr')

  if(!navigationArr) {
    const arr = await fetchNavigationArr()
    navigationArr = arr;
    await cache.setItem('navigationArr', arr)
  }

  const menNav = findMenNav(navigationArr)
  const womenNav = findWomenNav(navigationArr)
  return {
    Men: parseAsosNavigationArray(menNav),
    Women: parseAsosNavigationArray(womenNav)
  };
})

const fetchNavigationArr = async () => {
  const config = useRuntimeConfig()
  try {
    // I don't want to type an object with 55k lines of code
    const data = await $fetch<{ navigation: any[] }>(config.apiUrl + '/categories/list', {
      headers: {
        'X-RapidAPI-Key': config.apiKey,
        'X-RapidAPI-Host': config.apiHost
      }
    })
    return data.navigation;
  } catch (e) {
    console.log(e)
    return {}
  }
}

const parseAsosNavigationArray = (arr: any[]): Collection => {
  const collection = findCollection(arr)!
  return formatCollection(collection.children)
}

const findCollection = (nav: any): any => {
  if(isCollection(nav)) {
    return nav;
  }

  if(isHaveChildren(nav)) {
    for(const children of nav.children) {
      // @ts-ignore
      const category = findCollection(children)
      if(category)
        return category
    }
  }
}

const formatCollection = (childrens: any[]): Collection => {
  const collection: Collection = {}
  for (const children of childrens) {
    const title = getTitle(children)
    if(!isExcludedCollection(title))
      collection[title] = formatCategoryGroup(children.children)
  }
  return collection;
}

const formatCategoryGroup = (childrens: any[]): CategoryGroup => {
  const group: CategoryGroup = {}
  for (const children of childrens) {
    const title = getTitle(children)
    if(isExcludedCategory(title))
      continue;
    const group_type = getGroupType(children)
    group[title] = {
      items: getGroupItems(children.children, group_type),
      group_type
    }
  }
  return group;
}

const getGroupItems = (childrens: any[], group_type: GroupType) => {
  const items: CategoryGroupContent["items"] = {};

  for (const children of childrens) {
    const title = getTitle(children);
    if(group_type === GroupType.TextList) {
      items[title] = getId(children)
      continue;
    }
    if(group_type === GroupType.CircleList || group_type === GroupType.TileList)
      items[title] = {
        id: getId(children),
        image_url: getImageUrl(children)
      }
  }
  return items;
}

const getId = (item: any) => item?.link?.categoryId

const isCollection = (item: any) => item?.content?.title === 'Categories'
const getTitle = (item: any) => item.content.title
const isHaveChildren = (item: any) => item.children && item.children.length
const getGroupType = (item: any): GroupType => {
  if(!item.display?.webLargeTemplateName)
    return GroupType.TextList;

  const name = item.display?.webLargeTemplateName
  if(name === 'textList')
    return GroupType.TextList;

  if(name === 'circleImageListLarge' || name === 'gridCircleImageLarge')
    return GroupType.CircleList

  return GroupType.TileList;
}
const getImageUrl = (item: any) => item.content?.webLargeImageUrl
const isExcludedCategory = (title: string) => {
  return title.toLowerCase().includes('app') || title === 'SALE'
}
const isExcludedCollection = (title: string) => title === 'Marketplace'
const findMenNav = (arr: any[]) => arr.find(item => item.content?.title === 'Men')
const findWomenNav = (arr: any[]) => arr.find(item => item.content?.title === 'Women')