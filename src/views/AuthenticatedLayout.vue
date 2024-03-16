<template>
  <div class="main-wrapper">
    <Navbar />
    <Sidebar />

    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>{{ currentRoute }}</h1>
        </div>
        <div class="section-body">
          <router-view></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Navbar, Sidebar } from '@/components';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let currentRoute = ref(router.currentRoute.value.name);
watch(router.currentRoute, () => {
  currentRoute.value = router.currentRoute.value.name;
});

</script>

<style></style>
