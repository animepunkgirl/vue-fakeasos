<template>
  <Dropdown
      ref="dropdown"
      ignore-scrollbar
      v-if="menuStore.collections"
  >
    <div class="bg-gray-700 px-7 flex border-y border-gray-600" ref="menu">
      <AppHeaderMenuItem
          v-for="collection in menuStore.collections"
          :key="collection"
          :title="collection"
          :active="menuStore.isActiveCollection(collection)"
          @click="handleCollectionClick(collection)"
      />
    </div>
    <template #dropdown>
      <AppHeaderMenuDropdownGroups />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import {DropdownRef} from "~/utils/types";

const menuStore = useMenuStore()
const menu = ref<HTMLDivElement | null>(null)
const dropdown = ref<DropdownRef>(null)

const handleCollectionClick = (collectionName: string) => {
  if(dropdown.value && menu.value) {
    menuStore.selectCollection(collectionName)
    dropdown.value.toggle(menu.value)
  }
}
</script>