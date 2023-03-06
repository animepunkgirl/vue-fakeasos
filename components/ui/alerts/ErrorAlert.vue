<template>
  <AccordionTransition>
    <button
        type="button"
        class="
          transition-all duration-200 overflow-hidden ease-out
          px-4 py-2.5 w-full text-sm text-left text-red-800 rounded-lg bg-red-50 dark:bg-red-500/80 dark:text-white
        " role="alert"
        v-if="error"
        :class="props.class"
    >
      {{ error }}
    </button>
  </AccordionTransition>
</template>

<script setup lang="ts">
interface Props {
  error: string
  class?: string
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>