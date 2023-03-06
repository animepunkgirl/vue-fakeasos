<template>
  <AppHeaderMobile
    v-if="viewport.isLessThan('lg')"
  />
  <AppHeaderDesktop
    v-if="viewport.isGreaterOrEquals('lg')"
  />
</template>

<script setup lang="ts">
const viewport = useViewport()
</script>