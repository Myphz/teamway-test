<template>
  <main class="flex-column justify-center">
    <QuestionView
      :answers="data[questionIndex].answers"
      :question="data[questionIndex].question"
      :next="next"
    />
  </main>
</template>

<script lang="ts" setup>
import QuestionView from "@/components/Question.vue";
import fetchServer from "@/helpers/fetch";
import shuffleArray from "@/helpers/shuffle";
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Question, Result } from "@/types";

const data: Question[] = shuffleArray(await fetchServer("questions"));

let totalScore = 0;
const questionIndex = ref(0);
const router = useRouter();

const next = async (score: number) => {
  totalScore += score;
  if (questionIndex.value === data.length - 1) {
    const { result, quotes }: Result = await fetchServer("results", {
      score: totalScore,
    });
    // Pass the result as history state
    return router.push({ name: "results", state: { result, quotes } });
  }
  questionIndex.value++;
};
</script>
