<template>
  <label
    class="text-sm font-medium text-gray-900 dark:text-white"
    v-bind="props"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
import {LabelHTMLAttributes} from "@vue/runtime-dom";

interface Props extends LabelHTMLAttributes {}
const props = defineProps<Props>()
</script>