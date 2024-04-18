<template>
  <div class="h-full relative">
    <Navbar />
    <slot />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar/index.vue";
</script>

<style lang="scss" scoped></style>
