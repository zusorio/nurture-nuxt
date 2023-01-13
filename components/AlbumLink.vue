<script lang="ts" setup>
defineProps<{
  title: string;
  image: string;
  link: string;
  links: {
    icon: string;
    title: string;
    url: string;
  }[];
}>();
</script>

<template>
  <div class="album">
    <h2 class="header">{{ title }}</h2>
    <div class="cover-holder">
      <nuxt-img class="cover" :src="image" :alt="`Album art for ${title}`" />
      <div class="insides">
        <NuxtLink class="stream-link" v-for="link in links" :href="link.url" target="_blank">
          <Icon size="2rem" :name="link.icon"/>
          <div>{{ link.title }}</div>
        </NuxtLink>
      </div>
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

.insides {
  position: absolute;
  inset: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 50%);
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  opacity: 0;
  transition: opacity 0.3s;
}

.stream-link {
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.stream-link:hover, .stream-link:focus {
  color: #cccccc;
}

.cover-holder:hover > .insides, .cover-holder:focus-within > .insides {
  opacity: 100;
}

</style>
