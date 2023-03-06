<template>
  <input
    class="
      appearance-none
      bg-gray-50
      border border-gray-300
      text-gray-900 sm:text-sm
      rounded-lg
      focus:ring-2
      focus:ring-purple-600 focus:purple-600
      block w-full p-2.5
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-purple-500
      dark:focus:border-purple-500
    "
    v-bind="props"
    v-model="model"
  >
</template>

/* TODO: Fix chrome autofill styling */
<script setup lang="ts">
import {InputHTMLAttributes} from "@vue/runtime-dom";
import {computed} from "vue";

interface Props extends InputHTMLAttributes {
  modelValue: unknown
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: unknown): void
}
const emit = defineEmits<Emits>()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>