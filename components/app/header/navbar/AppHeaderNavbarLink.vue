<template>
  <NuxtLink
      type="button"
      :class="classes"
      active-class="text-white before:scale-x-100"
      :to="to"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string,
  transitionTo: 'left' | 'right'
}
const props = defineProps<Props>()

const classes = computed(() => {
  const link =`
    transition-colors
    hover:text-white
    px-3
    min-w-[8rem]
    text-center
    py-4
    relative
  `
  const follower = `
      before:block
      before:absolute
      before:left-0
      before:bottom-0
      before:h-1
      before:w-full
      before:bg-purple-700
      before:rounded-lg
      before:transition-transform
      before:scale-x-0
      `
  const origins = {
    'left': 'before:origin-left',
    'right': 'before:origin-right'
  }

  return [link, follower, origins[props.transitionTo]]
})
</script>

<style scoped>

</style>