<template>
  <Layout>
    <Suspense>
      <router-view />
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
</script>

<style lang="scss">
@use "@styles/reset" as *;
@use "@styles/utilities" as *;
</style>
