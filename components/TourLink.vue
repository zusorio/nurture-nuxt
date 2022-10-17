<script lang="ts" setup>
import { DateTime } from "luxon";

defineProps<{
  location: string;
  tickets: string;
  date: string;
}>();
</script>

<template>
  <div class="tour-date">
    <div>
      <div class="location">{{ location }}</div>
      <div>{{ DateTime.fromISO(date).setLocale('en-us').toLocaleString(DateTime.DATE_MED) }}</div>
    </div>
    <NuxtLink class="tour-link" :href="tickets">Buy tickets</NuxtLink>
  </div>
</template>

<style scoped>
.tour-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}


@media (min-width: 640px) {
  .location {
    font-size: 2rem;
  }
}

.tour-link {
  padding: 0.5rem 1rem;
  background: white;
  border: white solid 1px;
  color: #000;
  transition: color 0.5s, background-color 0.5s;
}

.tour-link:hover {
  background: #000;
  color: white;
}
</style>
