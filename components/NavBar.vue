<template>
  <nav>
    <NuxtLink
      to="/"
      class="nav-link"
      :class="{ active: $route.name === 'index' }"
    >
      Home
    </NuxtLink>
    <NuxtLink
      to="/about"
      class="nav-link"
      :class="{ active: $route.name === 'about' }"
    >
      About
    </NuxtLink>
    <NuxtLink
      to="/tour"
      class="nav-link"
      :class="{ active: $route.name === 'tour' }"
    >
      Tour
    </NuxtLink>
    <NuxtLink
      to="/videos"
      class="nav-link"
      :class="{ active: $route.name === 'videos' }"
    >
      Videos
    </NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}

.nav-link {
  padding: 0.5rem 1rem;
  border: white solid 1px;
  box-shadow: inset 0 0 10px 0 #fff;
  transition: color 0.5s, background-color 0.5s;
}

.nav-link:hover,
.nav-link.active {
  background: white;
  color: black;
  box-shadow: none;
}
</style>
