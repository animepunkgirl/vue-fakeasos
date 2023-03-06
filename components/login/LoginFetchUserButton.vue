<template>
  <ButtonLink type="button" @click="loadUserDataPair">
    Get random account
  </ButtonLink>
</template>

<script setup lang="ts">
import {RandomUserDto} from "~/types/api/user.dto";

const config = useRuntimeConfig()

interface Emits {
  (e: 'fetchUser', user: RandomUserDto): void
}

const emit = defineEmits<Emits>()
const loadUserDataPair = async () => {
  const randId = Math.floor(Math.random() * 10 + 1);
  const { data: user } = await useFetch<RandomUserDto>(`${config.public.api}/users/${randId}`, {
    pick: ['id', 'username', 'password']
  })
  if(user.value) {
    emit('fetchUser', user.value)
  }
}
</script>