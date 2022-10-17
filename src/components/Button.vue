<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "@styles/variables" as *;

button {
  background: none;
  border: 3px solid $primary;
}
</style>
