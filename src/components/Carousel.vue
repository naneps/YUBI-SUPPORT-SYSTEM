<template>
  <div class="carousel slide h-100" :id="carouselId" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(item, index) in items"
        :key="index"
        :data-target="`#${carouselId}`"
        :data-slide-to="index"
        :class="{active: index === activeIndex}"></li>
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{'carousel-item': true, active: index === activeIndex}">
        <img
          :src="item.imageUrl"
          class="d-block w-100"
          :alt="'Slide ' + (index + 1)" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.heading }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      :href="`#${carouselId}`"
      role="button"
      data-slide="prev"
      @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      :href="`#${carouselId}`"
      role="button"
      data-slide="next"
      @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    carouselId: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    prevSlide() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    nextSlide() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      }
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
