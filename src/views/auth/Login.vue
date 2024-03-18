<template>
  <section class="section">
    <div class="d-flex flex-wrap align-items-stretch">
      <div
        class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
        <div class="p-4 m-3">
          <!-- <img
            src="../assets/img/stisla-fill.svg"
            alt="logo"
            width="80"
            class="shadow-light rounded-circle mb-5 mt-2" /> -->
          <h4 class="text-dark font-weight-normal">
            Welcome to <span class="font-weight-bold">YSS</span>
          </h4>
          <p class="text-muted">Report your problem and get the solution</p>
          <InputField
            label="Email"
            inputId="email"
            name="email"
            type="email"
            v-model="email"
            :icon="`fas fa-envelope`"
            :hasIcon="true"
            required />
          <InputField
            label="Password"
            inputId="password"
            name="password"
            type="password"
            v-model="password"
            :icon="`fas fa-lock`"
            :hasIcon="true"
            required />
          <div class="form-group">
            <span class="float-right my-2">
              <a href="auth-forgot-password.html" class="text-small"
                >Forgot Password?</a
              >
            </span>

            <Button
              type="primary"
              size="md"
              block
              tabindex="3"
              @click="login()">
              Login
            </Button>
          </div>
        </div>
      </div>
      <div
        class="col-lg-8 col-12 order-lg-2 order-1 min-vh-100 position-relative overlay-gradient-bottom">
        <div class="absolute-bottom-left index-2">
          <div class="text-light p-5 pb-2">
            <div class="mb-5 pb-3">
              <h1 class="mb-2 display-4 font-weight-bold">Good Morning</h1>
              <h5 class="font-weight-normal text-muted-transparent">YSS</h5>
            </div>
          </div>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww"
          alt="login"
          class="w-100 h-100 img-fluid position-relative" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Import necessary components and functions
// import { Button, InputField } from "@/components";
import { useAuthStore } from "@/store/modules/auth-store";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const password = ref("");
const authStore = useAuthStore();
const login = () => {
  authStore.login();
  window.location.href = "/";
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
