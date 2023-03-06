<template>
  <header class="
    sticky top-0 z-10 bg-gray-900 text-white p-1
    flex items-center justify-between flex-wrap
  ">
    <AppHeaderLogo />
    <AppHeaderBurgerButton @click="toggleBurger" />
    <AccordionTransition>
      <div class="transition-all duration-500 overflow-hidden ease-out w-full p-2" v-show="burgerOpen" @click="handleClick">
        <AppHeaderNavbar
            compact
        />
        <div class="flex mt-3 justify-end">
          <AppHeaderProfile />
        </div>
      </div>
    </AccordionTransition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const burgerOpen = ref(false)
const toggleBurger = () => burgerOpen.value = !burgerOpen.value
const closeBurger = () => burgerOpen.value = false

const handleClick = (e: MouseEvent) => {
  const target = e.target as HTMLAnchorElement
  if(!target)
    return

  if(target.nodeName === 'A')
    closeBurger()
}
</script>