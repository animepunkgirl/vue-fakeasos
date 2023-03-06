import {Product} from "~/types/api/product";


export interface ProductListDto {
  searchTerm: string,
  categoryName: string,
  itemCount: number,
  redirectUrl: string
  products: Product[]
}