<template>
  <h3 class="text-center font-fancy">
    You’re really busy at work and a colleague is telling you their life story
    and personal woes. You:
  </h3>
  <ol>
    <li>Don't dare to interrupt them</li>
    <li>Don't dare to interrupt them</li>
    <li>Don't dare to interrupt them</li>
    <li>Don't dare to interrupt them</li>
  </ol>
</template>

<style lang="scss" scoped>
@use "@styles/variables" as *;
@use "@styles/utilities" as *;

h3 {
  margin-bottom: 5rem;
  max-width: 50%;
  align-self: center;
}

ol {
  list-style-position: inside;
}

li {
  @extend .transition;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border: 1px solid $primary;
  cursor: pointer;

  &:hover {
    background-color: $primary;
    color: white;
  }
}
</style>
