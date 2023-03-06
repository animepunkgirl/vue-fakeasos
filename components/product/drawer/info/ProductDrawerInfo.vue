<template>
  <h4
      class="leading-none text-xl font-semibold text-gray-900 dark:text-white"
  >
    {{ product.name }}
  </h4>
  <p class="mb-1 text-gray-200">
    {{ product.brand.name }}
  </p>
  <div class="flex items-center gap-2">
    <p class="text-xl font-bold dark:text-white">
      {{ product.price.current.text }}
    </p>
    <p class="bg-gray-400 px-2 rounded-xl">-8%</p>
  </div>
  <p class="line-through text-lg text-gray-400 mb-4">
    {{  product.price.previous.text }}
  </p>
  <div class="flex flex-wrap mb-4">
    <img
        class="w-54 rounded-lg bg-gray-700"
        :src="`https://${product.media.catwalk[0].url}`"
    />
  </div>
  <p class="font-semibold text-lg mb-2">Product details</p>
  <p class="mb-2 font-light font-sans text-gray-400" v-html="product.description"/>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <ProductDrawerInfoBadge title="Brand" class="sm:col-span-2" v-if="product.brand.description">
      <p class="text-sm">{{ product.brand.description }}</p>
    </ProductDrawerInfoBadge>
    <ProductDrawerInfoBadge title="Size & Fit" >
      {{ product.info.sizeAndFit }}
    </ProductDrawerInfoBadge>
    <ProductDrawerInfoBadge title="Look after me">
      {{ product.info.aboutMe }}
    </ProductDrawerInfoBadge>
    <ProductDrawerInfoBadge title="About me">
      {{ product.info.aboutMe }}
    </ProductDrawerInfoBadge>
  </div>
  <div>
    TODO: Share link lol
  </div>
</template>

<script setup lang="ts">
import {ProductExtended} from "~/types/api/product";

interface Props {
  product: ProductExtended
}
defineProps<Props>()
</script>

<style scoped>

</style>