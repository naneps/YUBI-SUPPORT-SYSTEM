<template>
  <button :class="computedClasses" :disabled="disabled" @click="handleClick">
    <slot></slot>
    <i v-if="icon" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary", // Default button type
    },
    size: {
      type: String,
      default: "md", // Default button size
    },
    outline: {
      type: Boolean,
      default: false, // Default to filled button
    },
    block: {
      type: Boolean,
      default: false, // Default to inline button
    },
    icon: {
      type: String,
      default: "", // Default no icon
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClasses() {
      return {
        btn: true,
        [`btn-${this.type}`]: !this.outline, // Remove outline class when outline is true
        [`btn-outline-${this.type}`]: this.outline,
        [`btn-${this.size}`]: true,
        "btn-block": this.block,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit("click"); // Emit a click event when the button is clicked
    },
  },
};
</script>

<style>
/* Add custom button styles here */
</style>
