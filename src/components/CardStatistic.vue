<template>
  <div class="card card-statistic-2">
    <div class="card-icon" :class="iconColorClass">
      <i :class="iconClass"></i>
    </div>
    <div class="card-wrap">
      <div class="card-header">
        <h4>{{ title }}</h4>
      </div>
      <div class="card-body">
        {{ bodyContent }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: String,
  title: String,
  bodyContent: [String, Number],
  iconColor: {
    type: String,
    default: "bg-primary", // Default color if not provided
  },
});

const iconClass = `fas fa-${props.icon}`;
const iconColorClass = `card-icon ${props.iconColor}`;
</script>

<style scoped>
/* Add your custom styles here */
.card {
  /* Add card styles */

}
.card-icon {
  /* Add card icon styles */
}
.card-header {
  /* Add card header styles */
}
.card-body {
  /* Add card body styles */
}
</style>
