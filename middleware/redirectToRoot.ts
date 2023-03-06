
export default defineNuxtRouteMiddleware(() => {
  const route = useRoute()

  if(route.fullPath === '/' || route.fullPath.startsWith('/men'))
    navigateTo('/men')

  navigateTo('/women')
})