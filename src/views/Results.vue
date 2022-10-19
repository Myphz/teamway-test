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

    <router-link to="/test" class="btn">
      <Button>Restart the test</Button>
    </router-link>
  </main>
</template>

<script lang="ts" setup>
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";

const { result } = history.state;
// Go back to home if there is no result (i.e, if the user has typed /results manually)
if (!result) useRouter().replace("/");

const isExtrovert = result === "EXTROVERT";

const quotes = [
  [
    "You're rarely bored alone.",
    "People empty you. You have to get away to refill.",
    "You're uncomfortable with loud places and confrontations.",
  ],
  [
    "You enjoy being at the center of attention.",
    "You feel isolated by too much time spent alone.",
    "You tends to act first before thinking.",
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
