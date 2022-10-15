<template>
  <div class="header">
    <slot />
  </div>
</template>

<style scoped>
.header {
  min-height: 80vh;
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
