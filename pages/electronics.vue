<template>
  <p v-if="pending">LOADING</p>
  <ProductList
      v-if="!pending && data"
      :products="data.products"
  />
  <ProductDrawer />
</template>

<script setup lang="ts">
import {ProductListDto} from "~/types/api/product.dto";

const config = useRuntimeConfig()
const { data, pending } = useFetch<ProductListDto>(`/api/products`)
</script>