<template>
  <slot />
  <Teleport to="body">
    <div
        class="fixed z-10 top-0 left-0"
        :style="style"
        v-if="open"
        ref="dropdown"
    >
      <slot name="dropdown" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const open = ref(false)
const relative = ref<HTMLElement | null>(null)
const dropdown = ref<HTMLDivElement | null>(null)
// TODO: Make y offset when dropdown on bottom, create dropdown position props
interface Props {
  offset?: {
    x?: number,
    y?: number
  }
  ignoreScrollbar?: boolean
}
const props = defineProps<Props>()
const toggle = (relativeEl: HTMLElement) => {
  relative.value = relativeEl
  open.value = !open.value
}
const close = () => open.value = false;

interface Expose {
  toggle(el: HTMLElement | EventTarget): void,
  close(): void
}
defineExpose<Expose>({
  toggle,
  close
})

const scrollbarOffset = props.ignoreScrollbar ? 0 : 18;
const style = computed(() => {
  if(!open.value)
    return {};
  if(!relative.value || !dropdown.value)
    return {}


  const x = getX(dropdown.value.scrollWidth, relative.value.offsetLeft, props.offset?.x)
  const y = getY(0, relative.value.offsetTop + relative.value.offsetHeight, props.offset?.y)
  return {
    transform: `translate(${x}px, ${y}px)`
  }
})

const handleOutsideClick = (e: PointerEvent) => {
  const srcElement = e.srcElement
  console.log(srcElement === dropdown.value)
  console.log(srcElement === relative.value)
  if(srcElement === dropdown.value)
    return;
  if(srcElement === relative.value)
    return;

  console.log('outside')
}

watch(open, () => {
  if(open.value) {
    window.addEventListener('pointerdown', handleOutsideClick)
  } else {
    window.removeEventListener('pointerdown', handleOutsideClick)
  }
})
onUnmounted(() => {
  window.removeEventListener('pointerdown', handleOutsideClick)
})

const getX = (dropdownWidth: number, relativeOffset: number, offset?: number) => {
  let rightCornerThreshold = window.innerWidth - scrollbarOffset
  if(offset)
    rightCornerThreshold += offset

  let x = relativeOffset - scrollbarOffset
  const rightCorner = x + dropdownWidth

  if(rightCorner >= rightCornerThreshold) {
    x = window.innerWidth - dropdownWidth - scrollbarOffset
  }
  if(offset)
    x += offset
  return x;
}
const getY = (dropdownHeight: number, relativeOffset: number, offset?: number) => {
  if(!offset)
    return relativeOffset;

  return relativeOffset + offset
}
</script>