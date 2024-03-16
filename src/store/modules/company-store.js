import { defineStore } from "pinia";

export const useCompanyStore = defineStore("companyStore", {
    state: () => ({
        companies: [],
    }),
    getters: {
        companiesCount: (state) => state.companies.length,
        companyById: (state) => (id) => state.companies.find((company) => company.id === id),
        getCompanies: (state) => state.companies, // Renamed to getCompanies
    },
    actions: {
        async fetchCompanies() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            this.companies = data;
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
        },
    },
});