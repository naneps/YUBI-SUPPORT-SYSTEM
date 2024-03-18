<template>
  <GridRow>
    <GridColumn>
      <Card>
        <GridRow class="mb-2">
          <GridColumn lg="6">
            <SearchInput />
          </GridColumn>
          <GridColumn lg="6">
            <Button
              icon="fas fa-plus"
              type="primary"
              class="float-right"
              @click="router.push({name: 'create-issue'})"
              ><span class="mr-2">Create Issue</span></Button
            >
          </GridColumn>
        </GridRow>
        <Table
          :headers="tableHeaders"
          :columns="tableColumns"
          :items="issues"
          :isLoading="isLoading">
          <template #badge-status="{item, column, index}">
            <span class="badge" :class="badgeStatusColor(item[column.key])">{{
              item[column.key]
            }}</span>
          </template>
          <template #badge-priority="{item, column, index}">
            <span class="badge badge-primary">{{ item[column.key] }}</span>
          </template>
          <template #image="{item, column, index}">
            <img
              v-for="assignee in item[column.key]"
              :src="generateAvatarUrl(assignee.name)"
              :alt="assignee.name"
              class="avatar rounded-circle avatar-sm m-1" />
          </template>
          <template #actions="{item, column, index}">
            <div class="btn-group">
              <Button
                type="primary"
                size="sm"
                icon="fas fa-eye"
                @click="
                  router.push({name: 'view-issue', params: {id: item.id}})
                " />
              <Button
                type="success"
                size="sm"
                icon="fas fa-edit"
                @click="
                  router.push({name: 'edit-issue', params: {id: item.id}})
                " />
              <Button
                type="danger"
                size="sm"
                icon="fas fa-trash"
                @click="deleteItem(index)" />
            </div>
          </template>
        </Table>
      </Card>
    </GridColumn>
  </GridRow>
</template>

<script setup>
import {
    Button,
    Card,
    GridColumn,
    GridRow,
    SearchInput,
    Table,
} from "@/components/";
import { useIssueStore } from "@/store/modules/issue-store";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const tableHeaders = ref([
  {label: "Title"},
  {label: "Client"},
  {label: "Status"},
  {label: "Priority"},
  {label: "Service"},
  {label: "Assignees"},
  {label: "Date"},
  {label: "Actions"},
]);

const tableColumns = ref([
  {key: "title", type: "text"},
  {key: "client", type: "text"},
  {key: "status", type: "badge-status"},
  {key: "priority", type: "badge-priority"},
  {key: "service", type: "text", formatter: (value) => value.name},
  {key: "assignees", type: "image"},
  {key: "date", type: "text"},
  {key: "actions", type: "actions"},
]);

const getRandomColor = (name) => {
  const colors = [
    "7F9CF5",
    "EBF4FF",
    "34D399",
    "FBBF24",
    "F87171",
    "818CF8",
    "F472B6",
    "60A5FA",
    "6EE7B7",
    "93C5FD",
  ];
  const charCode = name.charCodeAt(0);
  return colors[charCode % colors.length];
};

const generateAvatarUrl = (name) => {
  const randomColor = getRandomColor(name);
  return `https://ui-avatars.com/api/?name=${name}&size=50&background=${randomColor}&color=fff`;
};

const router = useRouter();
const isLoading = ref(false);
const issueStore = useIssueStore();
const issues = ref([]);

const getIssues = async () => {
  isLoading.value = true;
  await issueStore.fetchIssues();
  issues.value = issueStore.issues;
  isLoading.value = false;
};

onMounted(() => {
  getIssues();
});

const badgeStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "badge-primary";
    case "In Progress":
      return "badge-warning";
    case "Resolved":
      return "badge-success";
    case "Closed":
      return "badge-danger";
    default:
      return "badge-primary";
  }
};
</script>

<style></style>
