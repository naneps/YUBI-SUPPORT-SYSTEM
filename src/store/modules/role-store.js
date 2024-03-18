import { defineStore } from "pinia";
export const useRoleStore = defineStore(
    "roleStore",
    {
        state: () => ({
        roles: [],
        }),
        getters: {
        rolesCount: (state) => state.roles.length,
        roleById: (state) => (id) => state.roles.find((role) => role.id === id),
        getRoles: (state) => state.roles, // Renamed to getRoles
        } , 
        actions: {
        async fetchRoles() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.roles = [
                        { id: 1, name: "Admin" },
                        { id: 2, name: "Client" },
                        { id: 3, name: "Backend Dev" },
                        { id: 4, name: "Frontend Dev" },
                        { id: 5, name: "Mobile Dev" },
                        { id: 6, name: "Fullstack Dev" },
                        { id: 7, name: "System Analyst"},
                        { id: 8, name: "UI/UX Designer" },
                        { id: 9, name: "QA" },
                        { id: 10, name: "DevOps"} , 
                        { id: 11, name: "IT Support" },
                        { id: 12, name: "Project Manager" },
                    ];
                    resolve(this.roles);
                }, 1000);
            });
        },
        },
    }
);