<script lang="ts" setup>
import { DateTime } from "luxon";

const props = defineProps<{
  location: string;
  tickets: string;
  date: string;
  ticketSaleStart: string;
}>();

const now = ref(DateTime.now());

const start = computed(() => {
  return DateTime.fromISO(props.ticketSaleStart);
});
onMounted(() => {
  setInterval(() => {
    now.value = DateTime.now();
  }, 1000);
});
</script>

<template>
  <div class="tour-date">
    <div>
      <div class="location">{{ location }}</div>
      <div>{{ DateTime.fromISO(date).setLocale('en-us').toLocaleString(DateTime.DATE_MED) }}</div>
    </div>
    <NuxtLink v-if="now > start" class="tour-link" :href="tickets">Buy tickets</NuxtLink>
    <div class="sale" v-else>
      <div>Sale starting in</div>
      <div class="sale-timer">{{start.diff(now).toFormat("d'd' hh'h' mm'm' ss's'")}}</div>
    </div>
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

.sale {
  text-align: center;
}

.sale-timer {
  font-variant: tabular-nums;
  font-weight: bold;
}
</style>
