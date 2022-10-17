<template>
  <nav>
    <ul>
      <li class="h3 font-fancy">
        <router-link to="/"> Persona </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "@styles/variables" as *;
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5em 2em;
  background-color: $secondary;
}
</style>
