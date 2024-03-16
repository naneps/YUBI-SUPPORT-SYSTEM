import { defineStore } from "pinia";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => localStorage.getItem("token") !== null,
  },
  actions: {
    login() {
      localStorage.setItem("token", "p");
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
