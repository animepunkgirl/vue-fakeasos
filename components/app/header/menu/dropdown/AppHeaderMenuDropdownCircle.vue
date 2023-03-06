<template>
  <a class="w-28 text-center text-sm group mx-auto" :href="menuStore.getItemLink(item.id)">
    <div class="px-2">
      <img class=" rounded-full border-[3px] border-white group-hover:border-purple-500 transition-colors" :src="item.image_url" alt="" />
    </div>
    <p>{{ title }}</p>
  </a>
</template>

<script setup lang="ts">
import {CategoryWithImage} from "~/types/api/category";
const menuStore = useMenuStore()
interface Props {
  title: string,
  item: CategoryWithImage
}
const props = defineProps<Props>()
</script>