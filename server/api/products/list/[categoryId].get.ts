import {ProductListDto} from "~/types/api/product.dto";

// TODO: Add offset
export default defineEventHandler<ProductListDto>(async (event) => {
  if(!event.context.params)
    throw createError({
      statusCode: 400,
      statusMessage: 'Missed category',
    })

  const categoryId = event.context.params.categoryId
  const _id = parseInt(categoryId)
  if(!_id || Number.isNaN(_id))
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })

  const cache = useStorage('fs')
  let productList = await cache.getItem(`product-list/${_id}`)
  if(!productList) {
    const [data, error] = await fetchProductList(_id)
    if(error)
      throw createError({
        statusCode: 404,
        statusMessage: error.errorMessage,
      })

    productList = data;
    await cache.setItem(`product-list/${_id}`, data)
  }
  return productList
})

interface Error {
  errorMessage: string
}
const fetchProductList = async (categoryId: number): Promise<[ProductListDto | null, Error | null]> => {
  console.log('from fetch')

  const config = useRuntimeConfig()
  try {
    const result = await $fetch<ProductListDto | Error>(config.apiUrl + '/products/v2/list', {
      params: {
        categoryId,
        store: 'US',
        limit: 48
      },
      headers: {
        'X-RapidAPI-Key': config.apiKey,
        'X-RapidAPI-Host': config.apiHost
      }
    })
    if("errorMessage" in result)
      return [null, result]

    return [result, null]
  } catch (e) {
    console.log(e)
    return [null, { errorMessage: 'Bad request' }]
  }
}