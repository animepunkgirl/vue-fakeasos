<template>
  <button
    class="font-medium text-purple-600 hover:underline dark:text-purple-500"
    v-bind="props"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import {ButtonHTMLAttributes} from "@vue/runtime-dom";

interface Props extends ButtonHTMLAttributes {}
const props = defineProps<Props>()
</script>