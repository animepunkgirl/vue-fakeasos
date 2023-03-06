<template>
  <Teleport to=".pre-body">
    <div class="fixed top-0 left-0 h-screen w-screen z-10" @click="$emit('click')" :class="props.class" />
  </Teleport>
</template>

<script setup lang="ts">

interface Props {
  class?: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'click'): void
}
defineEmits<Emits>()
</script>