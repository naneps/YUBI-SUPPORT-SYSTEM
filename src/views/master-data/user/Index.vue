<template>
  <div class="row">
    <div class="col-12">
      <Card>
        <div class="row mb-2">
          <!-- button create and filter search -->
          <div class="col-lg-6">
            <!-- search -->
            <SearchInput
              class="float-left"
              placeholder="Search User"
              @search="searchUsers" />
          </div>
          <div class="col-lg-6">
            <Button
              type="primary"
              class="float-right px-2 py-2"
              icon="fas fa-plus"
              @click="router.push({name: 'create-user'})">
              Create User
            </Button>
          </div>
        </div>
        <Table
          :headers="tableHeaders"
          :columns="tableColumns"
          :items="users"
          :isLoading="isLoading">
          <template #badge="{item, column, index}">
            <span :class="column.class">{{ item[column.key] }}</span>
          </template>
          <template #image="{item, column, index}">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&size=50&background=random&color=fff"
              :alt="item.name"
              class="img- rounded-circle w-50 h-50" />
          </template>
          <template #actions="{item, column, index}">
            <div class="btn-group">
              <Button
                type="primary"
                size="sm"
                icon="fas fa-eye"
                @click="viewItem(item)" />
              <Button
                type="success"
                size="sm"
                icon="fas fa-edit"
                @click="editItem(index)" />
              <Button
                type="danger"
                size="sm"
                icon="fas fa-trash"
                @click="deleteItem(index)" />
            </div>
          </template>
        </Table>
      </Card>
    </div>
  </div>
</template>
<script setup>
// import { Button, Card, SearchInput, Table } from "@/components";
import { useUsersStore } from "@/store/modules/users-store";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const companies = ref([]);
const isLoading = ref(false);
const usersStore = useUsersStore();
const users = ref([]);

const tableHeaders = ref([
  {label: "Name"},
  {label: "Email"},
  {label: "Role"},
  {label: "Actions"},
]);

const tableColumns = ref([
  {key: "name", type: "text"},
  {key: "email", type: "text"},
  {key: "role", type: "text"},
  {key: "actions", type: "actions"},
]);

const viewItem = (item) => {
  console.log("View Company:", item);
};

const editItem = (index) => {
  console.log("Edit Company at index:", index);
  router.push({
    name: "update-company",
    params: {id: companies.value[index].id},
  });
};

const deleteItem = (index) => {
  console.log("Delete Company at index:", index);
};
const searchUsers = async (search) => {
  isLoading.value = true;
  if (!search) {
    await getUsers();
    return;
  }
  users.value = users.value.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  isLoading.value = false;
};
const getUsers = async () => {
  isLoading.value = true;
  await usersStore.fetchUsers();
  users.value = usersStore.getUsers;
  console.log("Users:", users.value);
  isLoading.value = false;
};
onMounted(async () => {
  await getUsers();
});
</script>
<style></style>
