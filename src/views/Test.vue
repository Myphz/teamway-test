<template>
  <main class="flex-column justify-center">
    <Question
      :answers="data[questionIndex].answers"
      :question="data[questionIndex].question"
      :next="next"
    />
  </main>
</template>

<script lang="ts" setup>
import Question from "@/components/Question.vue";
import fetchServer from "@/helpers/fetch";
import shuffleArray from "@/helpers/shuffle";
import { ref } from "vue";
import { useRouter } from "vue-router";

const data = await fetchServer("questions");

shuffleArray(data);

let totalScore = 0;
const questionIndex = ref(0);
const router = useRouter();

const next = (score: number) => {
  totalScore += score;
  if (questionIndex.value === data.length - 1) {
    // TODO: Replace with backend call
    const result = totalScore > 10 ? "EXTROVERT" : "INTROVERT";
    // Pass the result as history state
    router.push({ name: "results", state: { result } });
    return undefined;
  }
  questionIndex.value++;
  return undefined;
};
</script>
