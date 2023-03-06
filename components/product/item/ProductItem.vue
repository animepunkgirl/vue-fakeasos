<template>
  <button
      type="button"
      class="text-white-200 hover:bg-gray-600 p-2 text-left transition duration-100 focus:bg-gray-500 outline-none h-full flex flex-col"
      @click="openProductInfo"
  >
    <img
        class="w-full"
        :src="`https://${product.imageUrl}`"
    />
    <p class="font-light">{{ product.name }}</p>
    <div class="font-medium flex-grow flex items-end justify-items-end">
      <p>{{ product.price.current.text }}</p>
      <p v-if="showPreviousPrice">
        {{ product.price.previous.text }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Product as IProduct } from '~/types/api/product'

interface Props {
  product: IProduct
}
const props = defineProps<Props>();

const productStore = useProductStore();
const openProductInfo = () => productStore.selectProduct(props.product.id)
const showPreviousPrice = computed(() => {
  const prev = props.product.price.previous
  const current = props.product.price.current
  if(prev.value && current.value) {
    console.log(prev.value, current.value)
    return prev.value >= current.value
  }
  return false
})
</script>

<style scoped>

</style>