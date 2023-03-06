<template>
  <div class="flex flex-col min-h-screen text-white bg-gray-800 pb-9">
    <AppHeader />
    <main class="container mx-auto px-4 pt-2 flex-1">
      <slot />
    </main>
    <AppFooter />
    <div class="pre-body" />
  </div>
</template>