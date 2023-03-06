export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore()

  if(userStore.token && userStore.user)
    return navigateTo('/')
})