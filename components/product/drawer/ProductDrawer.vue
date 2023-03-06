<template>
  <Drawer
      :open="Number.isInteger(productStore.selectedProductId)"
      @close="unselectProduct"
  >
    <ProductDrawerInfo
      v-if="!pending && product"
      :product="product"
    />
  </Drawer>
</template>

<script setup lang="ts">
import {Product, ProductExtended} from "~/types/api/product";

const productStore = useProductStore()
const unselectProduct = () => productStore.unselectProduct()
const config = useRuntimeConfig()
const fetchUrl = computed(() => {
  if(Number.isInteger(productStore.selectedProductId))
    return `/api/products/${productStore.selectedProductId}`

  return ''
})
const { data: product, pending } = await useFetch<ProductExtended>(fetchUrl, { immediate: false })

const sizeFit = "<br>Model's height: 188cm/6'2\"<br />Model is wearing: Size Medium"
</script>

<style scoped>

</style>