import { defineStore } from "pinia";
import {User, UserToken} from "~/types/api/user";
import {RandomUserDto} from "~/types/api/user.dto";
import {FetchError} from "ofetch";
import LocalStorage from "~/services/local-storage/local-storage";
import {UserStorageToken} from "~/services/local-storage/local-storage.types";

interface UnauthorizedState {
  token: null,
  user: null
}

interface AuthorizedState {
  token: UserToken,
  user: User
}

type State = UnauthorizedState | AuthorizedState

export const useUserStore = defineStore('user', {
  state: (): State => ({
    token: null,
    user: null
  }),
  getters: {
    fullName(state) {
      if(!state.user)
        return ''

      const firstName = state.user.name.firstname.charAt(0).toUpperCase() + state.user.name.firstname.slice(1)
      const lastName = state.user.name.lastname.charAt(0).toUpperCase() + state.user.name.lastname.slice(1)
      return `${firstName} ${lastName}`
    }
  },
  actions: {
    async authorize(user: RandomUserDto) {
      try {
        const config = useRuntimeConfig()
        console.log('authorizing....')
        const { data: tokenData, error } = await useFetch<{ token: UserToken }, FetchError, any, 'post'>(`${config.public.api}/auth/login`, {
          method: 'post',
          body: {
            username: user.username,
            password: user.password
          }
        })
        if(error.value) {
          if(error.value.status === 401)
            throw new Error('Invalid username or password')

          throw new Error('Something went wrong, try again later')
        }
        if(tokenData.value) {
          this.$state.token = tokenData.value.token
          const { data: userData } = await useFetch<User>(`${config.public.api}/users/${user.id}`)
          if(userData.value)
            this.$state.user = userData.value
        }
      } catch (e: any) {
        return e.message
      }
    },
    async authorizeByToken(tokenStorage: UserStorageToken) {
      try {
        const config = useRuntimeConfig()
        this.token = tokenStorage.token
        const { data: userData } = await useFetch<User>(`${config.public.api}/users/${tokenStorage.id}`)
        if(userData.value)
          this.$state.user = userData.value
      } catch(e) {
        return e
      }
    },
    logout() {
      this.token = null
      this.user = null
      LocalStorage.removeToken()
    }
  }
})