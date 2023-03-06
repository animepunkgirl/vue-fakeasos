import {ProductExtended} from "~/types/api/product";

export default defineEventHandler<ProductExtended>(async (event) => {
  if(!event.context.params)
    throw createError({
      statusCode: 400,
      statusMessage: 'Missed ID',
    })

  const id = event.context.params.id
  const _id = parseInt(id)
  if(!_id || Number.isNaN(_id))
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })

  const cache = useStorage('fs')
  let product = await cache.getItem(`product/${_id}`)
  if(!product) {
    const [data, error] = await fetchProduct(_id)
    if(error)
      throw createError({
        statusCode: 404,
        statusMessage: error.errorMessage,
      })

    product = data;
    await cache.setItem(`product/${_id}`, data)
  }
  return product
})

interface Error {
  errorMessage: string
}
const fetchProduct = async (id: number): Promise<[ProductExtended | null, Error | null]> => {
  console.log('from fetch')

  const config = useRuntimeConfig()
  try {
    const result = await $fetch<ProductExtended | Error>(config.apiUrl + '/products/v3/detail', {
      params: {
        id
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