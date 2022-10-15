<script lang="ts" setup>
import {useFetch} from "#app";

const {data: videos} = await useFetch('/api/videos')
</script>

<template>
  <div>
    <HeaderContainer>
      <div class="videos">
        <div v-for="video in videos" :key="video.videoId">
          <h2 class="video-title">{{ video.title }}</h2>
          <YouTubeVideo :video-id="video.videoId"/>
        </div>
      </div>
    </HeaderContainer>
    <NavBar/>
    <div class="container">
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
.videos {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .videos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .videos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .videos {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.video-title {
  font-size: 1.5rem;
  padding-bottom: .5rem;
}
</style>
