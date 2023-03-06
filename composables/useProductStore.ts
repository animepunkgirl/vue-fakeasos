import {defineStore} from "pinia";
import {Product} from "~/types/api/product";
import {User} from "~/types/api/user";

interface State {
  selectedProductId: Product["id"] | null
}
export const useProductStore = defineStore('product', {
  state: (): State => ({
    selectedProductId: null
  }),
  actions: {
    async selectProduct(productId: Product["id"]) {
      this.selectedProductId = productId
    },
    unselectProduct() {
      this.selectedProductId = null
    }
  }
})