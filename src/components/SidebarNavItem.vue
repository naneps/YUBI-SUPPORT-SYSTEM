<!-- SidebarNavItem.vue -->
<template>
    <li v-if="hasDropdown" :class="{ 'nav-item': !hasDropdown, 'dropdown': hasDropdown, 'active': isActive }">
      <a v-if="!hasDropdown" class="nav-link" :to="to">
        <i v-if="icon" :class="icon"></i><span>{{ title }}</span>
      </a>
      <a v-else href="#" class="nav-link has-dropdown" @click="toggleDropdown">
        <i v-if="icon" :class="icon"></i><span>{{ title }}</span></a>
        <ul v-if="isActive" class="dropdown-menu">
          <li v-for="(item, index) in dropdownOptions" :key="index">
            <router-link class="nav-link" :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
    </li>
    <li v-else :class="{ 'nav-item': !hasDropdown }">
      <router-link class="nav-link" :to="to">
        <i v-if="icon" :class="icon"></i><span>{{ title }}</span>
      </router-link>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      title: String,
      to: String,
      dropdownOptions: Array,
    },
    data() {
      return {
        isActive: false,
      };
    },
    computed: {
      hasDropdown() {
        return this.dropdownOptions && this.dropdownOptions.length > 0;
      },
    },
    methods: {
      toggleDropdown() {
        this.isActive = !this.isActive;
        // Close other dropdowns when opening a new one
        if (this.isActive) {
          this.$emit('close-other-dropdowns');
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  