<script lang="ts" setup>
import {useFetch} from "#app";
import tourVideo from "@/assets/video/nurture.mp4";

const {data: tourDates} = await useFetch('/api/tour')
</script>

<template>
  <div>
    <HeaderContainer style="overflow: hidden;">
      <video
        :src="tourVideo"
        class="tour-video"
        autoplay
        muted
        loop
      ></video>
    </HeaderContainer>
    <NavBar/>
    <main class="container">
      <TourLink
        v-for="tourDate in tourDates"
        :key="tourDate.id"
        :date="tourDate.date"
        :location="tourDate.location"
        :tickets="tourDate.tickets"
        :ticket-sale-start="tourDate.ticketSaleStart"
      />
      <Footer/>
    </main>
  </div>
</template>

<style scoped>
.tour-video {
  object-fit: cover;
  height: 70vh;
  width: 100vw;
  overflow: hidden;
}

</style>
