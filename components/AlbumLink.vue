<script lang="ts" setup>
defineProps<{
  title: string;
  image: string;
  link: string;
}>();
</script>

<template>
  <div class="album">
    <h2 class="header">{{ title }}</h2>

    <div class="cover-holder">
      <img class="cover" :src="image" :alt="`Album art for ${title}`" />
      <NuxtLink :href="link" target="_blank">Stream now</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.album {
  display: block;
  text-align: center;
}

.header {
  line-height: 1.5;
  font-weight: 500;
}

.cover-holder {
  position: relative;
  height: 15rem;
  width: 15rem;
  padding: 0.5rem;
}

.cover {
  height: 100%;
  width: 100%;
}

a {
  opacity: 0;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 50%);
  display: grid;
  place-items: center;
  transition: opacity 0.3s;
}

.cover-holder:hover > a {
  opacity: 100;
}
a:focus {
  opacity: 100;
}
</style>
