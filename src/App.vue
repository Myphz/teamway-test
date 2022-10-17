<template>
  <main class="flex-column justify-center align-center">
    <h3>Welcome to</h3>
    <h1 class="font-fancy">Persona</h1>
    <div class="h4 text-center">
      <div>Discover your personality traits</div>
      <div>Find out your attitude and characteristics</div>
    </div>
    <Button>test</Button>
  </main>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
</script>

<style lang="scss">
@use "@styles/reset" as *;
@use "@styles/utilities" as *;
</style>

<style lang="scss" scoped>
main {
  height: 100%;
}

h1 {
  margin-bottom: 4em;
}
</style>
