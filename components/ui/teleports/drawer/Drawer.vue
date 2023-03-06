<template>
  <FullscreenBackground v-if="open" @click="$emit('close')" class="bg-black/30" />
  <Teleport to="body">
    <DrawerTransition>
      <div
          class="
            overflow-y-auto fixed top-0 left-0 z-10
            text-white p-4 pr-5 bg-gray-900
            w-full max-w-[32rem] h-screen
          "
          :class="scrollbar"
          v-if="open"
      >
        <slot />
      </div>
    </DrawerTransition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  open: boolean
}
const props = defineProps<Props>()

interface Emits {
  (e: 'close'): void
}
defineEmits<Emits>()

const scrollbar = useScrollbar()
usePreventBodyScroll(() => props.open)
</script>