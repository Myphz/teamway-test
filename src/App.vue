<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
</script>

<style lang="scss">
@use "@styles/reset" as *;
@use "@styles/utilities" as *;
</style>
