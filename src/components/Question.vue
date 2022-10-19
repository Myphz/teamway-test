<template>
  <h3 class="text-center font-fancy">
    {{ question }}
  </h3>
  <ol>
    <li v-for="answer in shuffleArray(answers)" @click="() => loadNext(answer)">
      {{ answer }}
    </li>
  </ol>
</template>

<script lang="ts" setup>
import shuffleArray from "@/helpers/shuffle";

type Props = {
  question: string;
  answers: string[];
  next: (score: number) => any;
};

const loadNext = (answer: string) => {
  next(points[answer]);
  return undefined;
};

const { question, answers, next } = defineProps<Props>();

// Convert answers array to object whose keys are the indexes and the values are the array values
// e.g: ["yes", "no", "maybe"] => { "yes": 0, "no": 1, "maybe": 2 }
const points = answers.reduce(
  (acc, answer, i) => ({ [answer]: i, ...acc }),
  {}
) as Record<string, number>;
</script>

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
