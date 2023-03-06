import {defineStore} from "pinia";
import {CategoryId, CollectionName, MenuDto, SexType} from "~/types/api/category";

export const useMenuStore = defineStore('menu',   () => {
  const menu = ref<MenuDto | null>(null);
  (async () => {
    const result = await useFetch('/api/menu')
    menu.value = result.data.value
  })();

  const sexType = ref<SexType>('Men');
  const collectionName = ref<CollectionName | null>(null)
  const categoryId = ref<CategoryId | null>(null)
  const selectSexType = (newType: SexType) => sexType.value = newType
  const selectCollection = (newCollectionName: CollectionName | null) => collectionName.value = newCollectionName

  const getItemLink = (categoryId: number) => `/${sexType.value}/${collectionName.value}/${categoryId}`

  const isActiveCollection = (selectedName: CollectionName) => {
    return selectedName === collectionName.value
  }

  const collections = computed(() => {
    if(!menu.value)
      return [];

    return Object.keys(menu.value[sexType.value])
  });

  const categoryGroups = computed(() => {
    if(!menu.value || !sexType.value ||!collectionName.value)
      return {}

    return menu.value[sexType.value][collectionName.value]
  })

  const route = useRoute()

  watch(() => route.fullPath, () => {
    if(route.fullPath.startsWith('/men') && sexType.value !== 'Men') {
      selectSexType('Men')
      selectCollection(null)
    }
    if(route.fullPath.startsWith('/women') && sexType.value !== 'Women') {
      selectSexType('Women')
      selectCollection(null)
    }
  }, { immediate: true });

  return {
    collections,
    categoryGroups,
    getItemLink,
    selectCollection,
    isActiveCollection,
  }
})