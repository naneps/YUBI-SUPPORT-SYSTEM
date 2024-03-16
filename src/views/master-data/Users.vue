<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <!-- BUTTON ADD -->

        <!-- END BUTTON ADD -->
        
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped" id="table-1">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody class="position-relative">
              <Loading/>
                <tr v-for="(user, index) in users" :key="user.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <button class="btn btn-secondary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Loading } from "@/components/";
import { useUsersStore } from "@/store/modules/users-store";
import { onMounted, ref } from "vue";

const usersStore = useUsersStore();
const users = ref([]);

onMounted(async () => {
  await usersStore.fetchUsers();
  users.value = usersStore.getUsers;
});
</script>

<style></style>
