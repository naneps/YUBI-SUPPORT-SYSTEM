<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      :placeholder="placeholder"
      aria-label="Search User"
      aria-describedby="button-addon2"
      @input="searchTextChanged" />
    <div class="input-group-append">
      <button
        class="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        @click="searchClicked">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { debounce } from "lodash";

const props = defineProps(["placeholder"]);
const emit = defineEmits(["search"]);

const searchTextChanged = debounce((event) => {
  emit("search", event.target.value); // Emit the 'search' event with the input value
}, 300); // Debounce the input event to reduce unnecessary search requests
</script>
