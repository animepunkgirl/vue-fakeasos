<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const scrollbar = useScrollbar()
onBeforeMount(() => window.document.body.classList.add(...scrollbar))
</script>