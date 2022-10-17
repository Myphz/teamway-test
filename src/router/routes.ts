import Home from "@/views/Home.vue";
import Test from "@/views/Test.vue";
import Results from "@/views/Results.vue";

export default [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "test",
    path: "/test",
    component: Test,
  },
  {
    name: "results",
    path: "/results",
    component: Results,
  },
];
