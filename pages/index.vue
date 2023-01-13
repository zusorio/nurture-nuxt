<template>
  <div>
    <HeaderContainer>
      <nuxt-img class="header-image" src="/porter_robinson_logo.png" alt="Porter Robinson Logo"/>
    </HeaderContainer>
    <NavBar/>
    <main class="container">
      <div class="albums-holder">
        <AlbumLink
          image="/nurture.jpg"
          title="Nurture"
          :links="[
            { icon: 'simple-icons:spotify', url: 'https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM', title: 'Spotify'},
            { icon: 'simple-icons:applemusic', url: 'https://music.apple.com/us/album/nurture/1550626757', title: 'Apple Music'},
            { icon: 'simple-icons:deezer', url: 'https://www.deezer.com/us/album/224054812', title: 'Deezer'},
            { icon: 'simple-icons:youtubemusic', url: 'https://music.youtube.com/playlist?list=OLAK5uy_kxKxwJ58EGkW3L2xmJFGi2efuZLjPeYuE', title: 'YT Music'},
          ]"
        />
        <AlbumLink
          image="/worlds.jpeg"
          title="Worlds"
          :links="[
            { icon: 'simple-icons:spotify', url: 'https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD', title: 'Spotify'},
            { icon: 'simple-icons:applemusic', url: 'https://music.apple.com/us/album/worlds/1440857923', title: 'Apple Music'},
            { icon: 'simple-icons:deezer', url: 'https://www.deezer.com/en/album/8198764', title: 'Deezer'},
            { icon: 'simple-icons:youtubemusic', url: 'https://music.youtube.com/playlist?list=OLAK5uy_mOH9z9t_4xhSSiajaXGDrpW0n4x0YVgPw', title: 'YT Music'},
          ]" link=""/>
      </div>
      <div class="promo-video">
        <h2 class="promo-video-text">
          Watch the music video for Everything Goes On
        </h2>
        <YouTubeVideo video-id="eEFVxI9lqjU"/>
      </div>
      <Footer/>
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
