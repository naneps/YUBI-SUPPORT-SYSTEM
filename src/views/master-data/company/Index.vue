<template>
  <GridRow>
    <GridColumn lg="12" sm="12" md="12">
      <Card>
        <GridRow class="mb-2">
          <GridColumn lg="6">
            <SearchInput
              class="float-left"
              placeholder="Search User"
              @search="searchCompanies" />
          </GridColumn>
          <GridColumn lg="6">
            <Button
              type="primary"
              class="float-right px-2 py-2"
              icon="fas fa-plus"
              @click="router.push({name: 'create-role'})">
              Create Company
            </Button>
          </GridColumn>
        </GridRow>
        <Table
            :headers="tableHeaders"
            :columns="tableColumns"
            :items="companies"
            :isLoading="isLoading"
          >
            <template #badge="{ item, column, index }">
              <span :class="column.class">{{ item[column.key] }}</span>
            </template>
            <template #image="{ item, column, index }">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&size=50&background=random&color=fff"
                :alt="item.name"
                class="img- rounded-circle w-50 h-50"
              />
            </template>
            <template #actions="{ item, column, index }">
              <div class="btn-group">
                <Button
                  type="primary"
                  size="sm"
                  icon="fas fa-eye"
                  @click="viewItem(item)"
                />
                <Button
                  type="success"
                  size="sm"
                  icon="fas fa-edit"
                  @click="editItem(index)"
                />
                <Button
                  type="danger"
                  size="sm"
                  icon="fas fa-trash"
                  @click="deleteItem(index)"
                />
              </div>
            </template>
          </Table>
      </Card> 
    </GridColumn>
  </GridRow>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// import { Button, Card, GridColumn, GridRow, SearchInput, Table } from "@/components";

import { useCompanyStore } from "@/store/modules/company-store";
const router = useRouter();
const companiesStore = useCompanyStore();
const companies = ref([]);
const isLoading = ref(false);
const tableHeaders = ref([
  { label: "#no" },
  { label: "Company Name" },
  { label: "Company Address" },
  { label: "Company Email" },
  { label: "Company Phone" },
  { label: "Company Website" },
  { label: "Company Logo" },
  { label: "Company Status" },
  { label: "Actions" },
]);

const tableColumns = ref([
  { key: "id", type: "text" },
  { key: "name", type: "text" },
  { key: "address", type: "text", formatter: (text) => mapAddress(text) },
  { key: "email", type: "text" },
  { key: "phone", type: "text" },
  { key: "website", type: "text" },
  { key: "logo", type: "image" },
  { key: "status", type: "badge", class: "badge bg-success" },
  { key: "actions", type: "actions" },
]);

const viewItem = (item) => {
  console.log("View Company:", item);
};

const editItem = (index) => {
  console.log("Edit Company at index:", index);
  router.push({
    name: "update-company",
    params: { id: companies.value[index].id },
  });
};

const deleteItem = (index) => {
  console.log("Delete Company at index:", index);
};
onMounted(async () => {
  await getCompanies();
});
const getCompanies = async () => {
  isLoading.value = true;
  await companiesStore.fetchCompanies();
  companies.value = companiesStore.getCompanies;
  isLoading.value = false;
};
const mapAddress = (address) => {
  // { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }
  return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
};
</script>
<style></style>
