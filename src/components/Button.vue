<template>
  <button class="transition">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@styles/variables" as *;

button {
  background: none;
  border: 3px solid $primary;
  padding: 0.5em 0.75em;
  cursor: pointer;

  &:hover {
    background: $primary;
    color: white;
  }
}
</style>
