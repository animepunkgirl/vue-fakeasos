<template>
  <button
      type="button"
      class="grid place-items-center rounded-full w-9 h-9 select-none ring ring-white/80 ring-1"
      :style="backgroundStyle"
  >
    <span class="font-medium text-white">{{ initials }}</span>
  </button>
</template>

<script setup lang="ts">
import {computed, Ref} from "vue";

interface Props {
  firstName: string,
  lastName: string,
}
const props = defineProps<Props>()

const initials = computed(() => {
  return `${props.firstName.charAt(0)}${props.lastName.charAt(0)}`.toUpperCase()
})

const backgroundStyle = computed(() => {
  let hash = 0;
  const fullName = props.firstName + props.lastName;

  [...fullName].forEach(character => {
    hash = character.codePointAt(0)! + ((hash << 5) - hash);
  })

  const h = hash % 360;
  const s = 40;
  const l = 50;
  return {
    backgroundColor: `hsl(${h}, ${s}%, ${l}%)`
  }
})
</script>

<style scoped>

</style>