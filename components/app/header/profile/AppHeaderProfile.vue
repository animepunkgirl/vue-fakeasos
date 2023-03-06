<template>
  <ClientOnly>
    <AppHeaderProfileLoginButton
        v-if="!userStore.token"
    />
    <AppHeaderProfileDropdown
        v-if="userStore.token"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const userStore = useUserStore()
</script>