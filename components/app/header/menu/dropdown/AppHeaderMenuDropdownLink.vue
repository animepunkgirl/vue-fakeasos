<template>
  <a
    class="hover:text-purple-500 transition-colors"
    :href="menuStore.getItemLink(item)"
  >
    {{ title }}
  </a>
</template>

<script setup lang="ts">
const menuStore = useMenuStore()
interface Props {
  title: string,
  item: number
}
const props = defineProps<Props>()
</script>