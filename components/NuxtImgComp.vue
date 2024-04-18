<template>
  <NuxtImg
    :src="props.src"
    :class="props.class"
    :width="props.width"
    :height="props.height"
    fit="cover"
    loading="lazy"
    :style="props.style"
    alt="rydale-img"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: false,
    default: "",
  },
  width: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    default: "",
  },
  style: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
