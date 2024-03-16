<template >
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Companies</h4>
                </div>
                <div class="card-body">
                    
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Company Address</th>
                                <th>Company Email</th>
                                <th>Company Phone</th>
                                <th>Company Website</th>
                                <th>Company Logo</th>
                                <th>Company Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(company, index) in companies" :key="company.id">
                                <td>{{ company.name }}</td>
                                <td>{{ mapAddress(company.address) }}</td>
                                <td>{{ company.email }}</td>
                                <td>{{ company.phone }}</td>
                                <td>{{ company.website }}</td>
                                <td>{{ company.logo }}</td>
                                <td>{{ company.status }}</td>
                                <td >
                                    <div class="btn-group">
                                    <button class="btn btn-secondary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCompanyStore } from "@/store/modules/company-store";
import { onMounted, ref } from "vue";
const companiesStore = useCompanyStore();
const companies = ref([]);
onMounted(async () => {
    await companiesStore.fetchCompanies();
    companies.value = companiesStore.getCompanies;
});
const mapAddress = (address) => {
    // { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
};
</script>
<style >
    
</style>