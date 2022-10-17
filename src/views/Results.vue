<template>
  <main class="justify-center align-center flex-column">
    <span class="h3">Here are the results</span>
    <div class="results">
      <span class="h2">You are an</span>
      &nbsp;
      <h1 class="font-fancy">{{ result }}</h1>
    </div>
    <div class="h3 flex-column" style="gap: 0.25em">
      <span v-for="quote in quotes">{{ quote }}</span>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const { result } = history.state;
if (!result) useRouter().replace("/");

const isExtrovert = result === "EXTROVERT";

const quotes = [
  [
    "You're rarely bored alone.",
    "People empty you. You have to get away to refill.",
    "You're uncomfortable with loud places and confrontations.",
  ],
][+isExtrovert];
</script>

<style lang="scss" scoped>
h2,
h1 {
  display: inline-block;
}

.results {
  margin-bottom: 4em;
}
</style>
