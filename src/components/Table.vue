<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key">
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody class="position-relative">
        <Loading v-if="isLoading" />
        <tr v-if="isLoading">
          <td :colspan="columns.length" class="text-center">Loading...</td>
        </tr>
        <tr v-if="!items.length && !isLoading">
          <td colspan="12" align="center">
            <template v-if="!isLoading">
              <slot name="empty"> No data available </slot>
            </template>
          </td>
        </tr>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="column in columns" :key="column.key">
            <template v-if="column.type === 'text'">
              {{ formatText(item[column.key], column.formatter) }}
            </template>
            <template v-else>
              <slot
                :name="column.type"
                v-bind:item="item"
                v-bind:column="column"
                v-bind:index="index"
              ></slot>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { Loading } from "@/components/";
import { defineProps } from "vue";

const props = defineProps({
  headers: Array,
  columns: Array,
  items: Array,
  isLoading: {
    type: Boolean,
    default: false,
  },
});

// Formatter function
const formatText = (text, formatter) => {
  if (typeof formatter === "function") {
    return formatter(text);
  }
  return text;
};
</script>

<style scoped>
/* Add any necessary styles for your component */
</style>
