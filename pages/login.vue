<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Flowbite
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
            <div>
              <Label for="username" class="mb-2">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="animepunkgirl"
                v-model.lazy.trim="form.username"
              />
            </div>
            <div>
              <Label for="password" class="mb-2">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                v-model.lazy.trim="form.password"
              />
            </div>
            <ErrorAlert
                :error="form.error"
                @click="hideError"
            />
            <Button
                type="submit"
                :loading="form.loading"
            >
              Log in
            </Button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <LoginFetchUserButton @fetch-user="handleUserFetch"/>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {RandomUserDto} from "~/types/api/user.dto";
import ErrorAlert from "~/components/ui/alerts/ErrorAlert.vue";

definePageMeta({
  layout: 'empty',
  middleware: 'unauthorized-only'
})

const form = reactive({
  id: 0,
  username: '',
  password: '',
  loading: false,
  error: ''
})
const userStore = useUserStore()

const handleSubmit = async () => {
  if(form.username && form.password) {
    form.loading = true;
    const err = await userStore.authorize({
      id: form.id,
      username: form.username,
      password: form.password
    })
    form.loading = false;
    if(err) {
      return form.error = err
    }
    navigateTo('/')
  }
}

const hideError = () => form.error = ''

const handleUserFetch = (user: RandomUserDto) => {
  form.id = user.id
  form.username = user.username
  form.password = user.password
}
</script>