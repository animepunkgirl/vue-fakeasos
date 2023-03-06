
export type CategoryId = number;

export interface CategoryWithImage {
  id: CategoryId
  image_url: string
}
export type Category = CategoryId | CategoryWithImage

export enum GroupType {
  TextList = 'text_list',
  CircleList = 'circle_list',
  TileList = 'tile_list'
}

export interface CategoryGroupContent {
  items: Record<string, Category>,
  group_type: GroupType
}

export interface CategoryGroup {
  [group_name: string]: CategoryGroupContent
}

export interface Collection {
  [key: CollectionName]: CategoryGroup
}
export type CollectionName = string;

export interface MenuDto {
  'Men': Collection,
  'Women': Collection
}

export type SexType = keyof MenuDto