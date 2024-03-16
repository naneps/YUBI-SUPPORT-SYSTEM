<template>
  <component :is="isLoggedIn ? AuthenticatedLayout : DefaultLayout" />
</template>
<script setup>
import { useAuthStore } from '@/store/modules/auth-store';
import AuthenticatedLayout from './views/AuthenticatedLayout.vue';
import DefaultLayout from './views/DefaultLayout.vue';
const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;
</script>
