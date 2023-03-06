import LocalStorage from "~/services/local-storage/local-storage";
import { useUserStore } from "~/composables/useUserStore";

export default defineNuxtRouteMiddleware(async () => {
  if(process.server) return;
  const userStore = useUserStore()
  if(userStore.token && userStore.user) return

  const token = LocalStorage.getToken()
  if(token) {
    await userStore.authorizeByToken(token)
  }
})