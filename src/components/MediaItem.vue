<template>
  <li class="media">
    <div>
      <slot name="leading"></slot>
    </div>
    <div class="media-body">
      <!-- <div class="media-right">
        <slot name="trailing"></slot>
      </div> -->
      <div class="media-title">
        <slot name="title"></slot>
      </div>
      <div class="text-muted text-smell">
        <slot name="subTitle"></slot>
      </div>
    </div>
    <div>
      <slot name="trailing"></slot>
    </div>
  </li>
</template>
<script>
</script>
<style scoped>
    .media {
        display: flex;
        /* padding: 15px; */
        align-items: center;
    }
    .media-body {
        /* flex: 1; */
        /* padding-left: 15px; */
    }
    .media-right {
        /* align-self: center; */
    }
    .media-title {
        /* font-size: 1.25rem; */
    }
    .text-smell {
        /* font-size: 0.875rem; */
    }
</style>
