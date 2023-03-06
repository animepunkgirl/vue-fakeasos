<template>
  <a class="w-56 h-24 text-center text-sm group relative group overflow-hidden" :href="menuStore.getItemLink(item.id)">
    <img class="border-2 border-white w-56 h-24 object-fill transition-transform group-hover:scale-110 duration-200" :src="item.image_url" alt="" />
    <div class="absolute z-10 inset-y-0 left-0 flex items-center">
      <p :class="labelClass">{{ title }}</p>
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

const labelClass = computed(() => {
  const isBiggerFont = props.title.length < 18
  return {
    "font-bold text-white uppercase tracking-[0.2em] px-2 bg-gray-900": true,
    "transition-colors group-hover:bg-white group-hover:text-gray-900": true,
    "text-lg": isBiggerFont,
  }
})
</script>