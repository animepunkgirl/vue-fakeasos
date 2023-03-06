<template>
  <Transition
      name="accordion"
      @before-enter="hide"
      @enter="show"
      @before-leave="show"
      @leave="hide"
  >
    <slot />
  </Transition>
</template>

/* Fix laggy animation + it's scrolling on top of page for some reason */
<script setup lang="ts">

const hide = (el: HTMLDivElement) => {
  el.style.height = '0';
}
const show = (el: HTMLDivElement) => {
  el.style.height = `${el.scrollHeight}px`
}
</script>