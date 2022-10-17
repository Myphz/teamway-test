import Home from "@/views/Home.vue";
import Test from "@/views/Test.vue";
import Results from "@/views/Results.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: "/results",
    component: Results,
  },
];
