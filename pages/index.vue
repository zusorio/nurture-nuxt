<script setup lang="ts">
import logo from "@/assets/img/porter_robinson_logo.png";
import nurtureArt from "@/assets/img/nurture.jpg";
import worldsArt from "@/assets/img/worlds.jpeg";
</script>

<template>
  <div>
    <HeaderContainer>
      <img class="header-image" :src="logo" alt="Porter Robinson Logo" />
    </HeaderContainer>
    <NavBar />
    <main class="container">
      <div class="albums-holder">
        <AlbumLink
          :image="nurtureArt"
          title="Nurture"
          link="https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM"
        />
        <AlbumLink :image="worldsArt" title="Worlds" link="https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD" />
      </div>
      <div class="promo-video">
        <h2 class="promo-video-text">
          Watch the music video for Everything Goes On
        </h2>
        <YouTubeVideo video-id="eEFVxI9lqjU" />
      </div>
      <Footer />
    </main>
  </div>
</template>

<style scoped>
.header-image {
  max-height: 100%;
  max-width: 100%;
}

.albums-holder {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;
  flex-direction: column;
}

@media (min-width: 640px) {
  .albums-holder {
    flex-direction: row;
  }
}

.promo-video {
  padding: 3rem 0;
}

.promo-video-text {
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  line-height: 1.3;
  padding-bottom: 1rem;
}
</style>
