<template>
    <GridRow>
        <GridColumn lg="3" md="6" sm="6" xs="12" v-for="statistic in statistics" :key="statistic.title">
            <CardStatistic :icon="statistic.icon" :title="statistic.title" :bodyContent="statistic.value" :icon-color="statistic.color" />
        </GridColumn>
    </GridRow>
    <GridRow>
        <GridColumn lg="8" md="12" sm="12">
            <Card>
             
            </Card>
        </GridColumn>

        <GridColumn lg="4" md="12" sm="12">
            <Card hasHeader>
                <template #header>
                    <h4 class="card-title text-dark">Recent Issues</h4>
                </template>
                <template #action>
                    <!-- link view all -->
                    <router-link to="/issues" class="btn btn-primary">View All</router-link>
                </template>
                 <ul class="list-unstyled list-unstyled-border">
                <MediaItem v-for="issue in recentIssues" :key="issue.id"  >
                  <template #leading>
                    <img v-if="issue.company" :src="issue.company.logo" :alt="issue.company.name" class="mr-3 rounded" width="50"/>
                  </template>
                  <template #title>
                    {{ issue.title }} 
                  </template>
                  <template #subTitle>
                    <div class="d-flex flex-column">
                      <span>
                        {{ issue.description }}
                      </span>
                      <span>
                        {{ $timeFromNow(issue.date) }}
                      </span>
                    </div>
                  </template>
                  <template #trailing>
                      <!-- button -->
                      <Button type="info" size="sm" icon="fas fa-eye" />
                  </template>
                </MediaItem>
              </ul>
            </Card>
        </GridColumn>
    </GridRow>
</template>

<script setup>
import { Button, Card, CardStatistic, GridColumn, GridRow, MediaItem } from '@/components/';
import { ref } from 'vue';
const statistics = ref([
  {
    title: 'Total Clients',
    value: 0,
    icon: 'fas fa-users',
    color: 'bg-secondary'
  },
  {
    title: 'Total Services',
    value: 0,
    icon: 'fas fa-building',
    color: 'bg-success'
  },
  {
    title: 'Total Companies',
    value: 0,
    icon: 'fas fa-building',
    color: 'bg-warning'
  },
  // active issue
  {
    title: "Active Issues",
    value: 0,
    icon: "fas fa-exclamation-triangle",
    color: "bg-danger",
  }
]);

const recentIssues = ref([
  {
    id: 1,
    title: "Issue 1",
    description: "This is the first issue",
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    company: {
      name: "Company 1",
      logo: "https://ui-avatars.com/api/?name=Company+1&color=7F9CF5&background=EBF4FF",
    },
  },
  {
    id: 2,
    title: "Issue 2",
    description: "This is the second issue",
    date: "2021-09-02",
    company: {
      name: "Company 2",
      logo: "https://ui-avatars.com/api/?name=Company+2&color=7F9CF5&background=EBF4FF",
    },
  },
  {
    id: 3,
    title: "Issue 3",
    description: "This is the third issue",
    date: "2021-09-03",
    company: {
      name: "Company 3",
      logo: "https://ui-avatars.com/api/?name=Company+3&color=7F9CF5&background=EBF4FF",
    },
  },
  {
    id: 4,
    title: "Issue 4",
    description: "This is the fourth issue",
    date: "2021-09-04",
    company: {
      name: "Company 4",
      logo: "https://ui-avatars.com/api/?name=Company+4&color=7F9CF5&background=EBF4FF",
    },
  },
  {
    id: 5,
    title: "Issue 5",
    description: "This is the fifth issue",
    date: "2021-09-05",
    company: {
      name: "Company 4",
      logo: "https://ui-avatars.com/api/?name=Company+4&color=7F9CF5&background=EBF4FF",
    },
  },
]);
</script>
