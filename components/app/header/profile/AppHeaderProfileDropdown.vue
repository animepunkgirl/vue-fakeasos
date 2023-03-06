<template>
  <Dropdown
      :offset="{ y: 10 }"
      ref="dropdown"
      v-if="userStore.user"
  >
    <InitiailsAvatar
        :first-name="userStore.user.name.firstname"
        :last-name="userStore.user.name.lastname"
        class="flex gap-1.5 items-center text-white group"
        @click="toggleDropdown"
    />
    <template #dropdown>
      <div class="bg-white divide-y divide-gray-100 w-44 dark:bg-gray-700 dark:divide-gray-600 rounded-lg shadow">
        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{{ userStore.fullName }}</div>
          <div class="font-medium truncate">{{ userStore.user.email }}</div>
        </div>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
        </ul>
        <div class="py-1">
          <button
              type="button"
              class="w-full px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              @click="userStore.logout"
          >
            Log out
          </button>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import {DropdownRef} from "~/utils/types";

const userStore = useUserStore()
const dropdown = ref<DropdownRef>(null)

const toggleDropdown = (e: MouseEvent) => {
  if(dropdown.value && e.target) {
    dropdown.value.toggle(e.target)
  }
}
</script>