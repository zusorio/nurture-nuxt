<script lang="ts" setup>
defineProps<{
  videoId: string;
}>();
</script>

<template>
  <iframe
    class="youtube-video"
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<style scoped>
iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border: 0px;
}
</style>
