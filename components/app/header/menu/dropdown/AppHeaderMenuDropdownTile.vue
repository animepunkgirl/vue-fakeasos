<template>
  <a class="w-56 h-24 text-center text-sm group relative " :href="menuStore.getItemLink(item.id)">
    <img class="w-56 h-24 object-fill" :src="item.image_url" alt="" />
    <div class="absolute z-10 inset-y-0 left-0 px-2 flex items-center">
      <p class="font-bold text-lg text-black uppercase tracking-[0.2em]">{{ title }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
// TODO: Change style besides on tile type
import {CategoryWithImage} from "~/types/api/category";
const menuStore = useMenuStore()
interface Props {
  title: string,
  item: CategoryWithImage
}
const props = defineProps<Props>()
</script>