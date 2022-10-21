<template>
  <footer>
    <div class="footer-block">
      <NuxtLink target="_blank" href="https://twitter.com/porterrobinson">Twitter</NuxtLink>
      <NuxtLink target="_blank" href="https://instagram.com/porterrobinson">Instagram</NuxtLink>
      <NuxtLink  target="_blank" href="https://tiktok.com/@porterrobinson">TikTok</NuxtLink>
    </div>

    <div class="footer-block footer-block-right">
      <NuxtLink target="_blank" href="/privacy">Privacy</NuxtLink>
      <NuxtLink target="_blank" href="/imprint">Imprint</NuxtLink>
      <div>&copy; Sample Sized LLC</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

.footer-block > a {
  display: block;
}

.footer-block-right {
  text-align: right;
}
</style>
