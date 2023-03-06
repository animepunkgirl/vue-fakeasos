<template>
  <div class="w-screen dark:bg-gray-900 dark:divide-gray-600 shadow flex gap-4 px-7 py-3 text-gray-400" v-if="menuStore.categoryGroups">
    <div v-for="(groupContent, group_title) in menuStore.categoryGroups">
      <p class="uppercase text-white font-medium mb-2">{{ group_title }}</p>
      <div :class="getContainerClassByGroup(groupContent.group_type, Object.values(groupContent.items).length)">
        <component
            v-for="(item, item_title) in groupContent.items"
            :key="item_title"
            :title="item_title"
            :item="item"
            :is="getComponentByGroupType(groupContent.group_type)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GroupType} from "~/types/api/category";
import {AppHeaderMenuDropdownCircle, AppHeaderMenuDropdownLink, AppHeaderMenuDropdownTile} from "#components";

const menuStore = useMenuStore()

const getContainerClassByGroup = (group_type: GroupType, items_count: number) => {
  if(group_type === GroupType.TextList) {
    const is2Columns = items_count >= 10
    console.log(items_count)
    return {
      'grid gap-x-2': true,
      'grid-cols-2': is2Columns,
    }
  }
  if(group_type === GroupType.CircleList) {
    return 'grid grid-cols-2 gap-4 auto-rows-fr'
  }
  if(group_type === GroupType.TileList)
    return 'flex flex-col gap-4'
}
const getComponentByGroupType = (group_type: GroupType) => {
  if(group_type === GroupType.CircleList)
    return AppHeaderMenuDropdownCircle;
  if(group_type === GroupType.TileList)
    return AppHeaderMenuDropdownTile;
  return AppHeaderMenuDropdownLink;
}
</script>