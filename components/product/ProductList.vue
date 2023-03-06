<template>
    <section
      class="
        grid grid-auto-rows-1 items-stretch
        grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))]
        lg:grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]
      "
    >
      <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </section>
</template>

<script setup lang="ts">
import {Product} from "~/types/api/product";

interface Props {
  products: Product[]
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>