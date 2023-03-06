<template>
  <div
      class="bg-gray-700 p-3 rounded-xl border border-gray-600 border-1 text-gray-400"
      v-bind="{...props, title: ''}"
  >
    <p class="font-semibold text-white">{{ props.title }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import {HTMLAttributes} from "@vue/runtime-dom";

interface Props extends HTMLAttributes {
  title: string
}
const props = defineProps<Props>()
</script>