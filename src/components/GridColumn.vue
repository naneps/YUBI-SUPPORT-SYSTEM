<template>
  <div :class="columnClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  lg: {
    type: String,
    // default: "3",
    default: "12",
  },
  md: {
    type: String,
    // default: "6",
    default: "12",
  },
  sm: {
    type: String,
    // default: "6",
    default: "12",
  },
  xs: {
    type: String,
    default: "12",
  },
});

const columnClasses = computed(() => {
  return {
    "col-lg": true,
    [`col-lg-${props.lg}`]: true,
    "col-md": true,
    [`col-md-${props.md}`]: true,
    "col-sm": true,
    [`col-sm-${props.sm}`]: true,
    col: true,
    [`col-${props.xs}`]: true,
  };
});
</script>

<style scoped>
/* Add your custom styles for the grid column here */
</style>
