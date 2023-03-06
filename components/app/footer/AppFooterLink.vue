<template>
  <NuxtLink
    class="text-gray-200 hover:underline"
    target="_blank"
    v-bind="props"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string
}
const props = defineProps<Props>()
</script>