<template>
  <div class="card">
    <div class="card-header" v-if="hasHeader">
      <slot name="header"></slot>
      <div class="card-header-action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
    props: {
        hasHeader: {
            type: Boolean,
            default: false,
        },
        hasFooter: {
            type: Boolean,
            default: false,
        },

    },
};

</script>
<style></style>
