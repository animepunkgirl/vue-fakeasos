<template>
  <button
      :class="buttonClass"
      :disabled="props.loading || props.disabled"
      v-bind="props"
  >
    <Spinner v-if="loading" />
    <slot v-if="!loading" />
  </button>
</template>

<script setup lang="ts">
import {ButtonHTMLAttributes} from "@vue/runtime-dom";
import {computed} from "vue";

interface Props extends ButtonHTMLAttributes {
  loading?: boolean
}
const props = defineProps<Props>()

const buttonClass = computed(() => {
  const common = "w-full text-white bg-purple-600 enabled:hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:bg-purple-600 enabled:dark:hover:bg-purple-700 dark:focus:ring-purple-800"
  const textPadding = "px-5 py-2.5"
  const loadingPadding = "px-5 py-[0.547rem]" // Padding to make same button size as when button have text inside

  return !props.loading ? [common, textPadding].join(' ') : [common, loadingPadding]
})
</script>