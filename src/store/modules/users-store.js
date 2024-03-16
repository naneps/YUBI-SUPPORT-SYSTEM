import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [],
  }),
  getters: {
    usersCount: (state) => state.users.length,
    userById: (state) => (id) => state.users.find((user) => user.id === id),
    getUsers: (state) => state.users, // Renamed to getUsers
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
});
