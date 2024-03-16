<template>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Yubi Support System</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">YSS</a>
      </div>
      <ul class="sidebar-menu">
        <li :class="isActiveRoute('/') ? 'active' : ''">
          <router-link class="nav-link" to="/">
            <i class="fas fa-fire"></i><span>Dashboard</span>
          </router-link>
        </li>
        <li :class="isActiveRoute('/issues') ? 'active' : ''">
          <router-link class="nav-link" to="/issues">
            <i class="fas fa-exclamation-triangle"></i><span>Issues</span>
          </router-link>
        </li>
        
        <li class="menu-header">Master Data</li>
        <li class="nav-item dropdown">
          <a  class="nav-link has-dropdown " :class="hasMatchedRoute('/master-data') ? 'active' :''">
            <i class="fas fa-database"></i><span>Master Data</span>
          </a>
          <ul class="dropdown-menu">
            <li :class="isActiveRoute('/master-data/users') ? 'active' : ''">
              <router-link class="nav-link" to="/master-data/users">
                <i class="fas fa-users"></i><span>Users</span>
              </router-link>
            </li>
            <!--clinet -->
            <li :class="isActiveRoute('/master-data/clients') ? 'active' : ''">
              <router-link class="nav-link" to="/master-data/clients">
                <i class="fas fa-users
                "></i><span>Clients</span>
              </router-link>
            </li>
           
            <!-- services -->
            <li :class="isActiveRoute('/master-data/services') ? 'active' : ''">
              <router-link class="nav-link" to="/master-data/services">
                <i class="fas fa-building"></i><span>Services</span>
              </router-link>
            </li>
            <!-- services -->
            <li :class="isActiveRoute('/master-data/companies') ? 'active' : ''">
              <router-link class="nav-link" to="/master-data/companies">
                <i class="fas fa-building"></i><span>Companies</span>
              </router-link>
            </li>
            <li :class="isActiveRoute('/master-data/roles') ? 'active' : ''">
              <router-link class="nav-link" to="/master-data/roles">
                <i class="fas fa-user-tag"></i><span>Roles</span>
              </router-link>
            </li>
          </ul>
        </li>
        
      </ul>

      <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
        <a
          href="https://getstisla.com/docs"
          class="btn btn-primary btn-lg btn-block btn-icon-split"
        >
          <i class="fas fa-rocket"></i> Documentation
        </a>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const isActiveRoute = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path === route;
};
const hasMatchedRoute = (route) => {
  const currentRoute = useRoute();
  return currentRoute.path.includes(route);
};
</script>

<style></style>
