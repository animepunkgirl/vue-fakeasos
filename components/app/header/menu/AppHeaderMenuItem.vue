<template>
  <button type="button" :class="classes">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  active: boolean
}
const props = defineProps<Props>()

const classes = computed(() => ({
  "w-max flex text-white text-sm transition-colors font-medium px-2 py-2": true,
  "hover:text-purple-500": !props.active,
  "bg-purple-500": props.active
}))
</script>