<template>
  <div class="relative z-2">
    <div
      class="relative flex flex-col justify-center items-center w-full h-[31vw] bg-[url('~/public/images/banner.png')] bg-bottom bg-[#20414b] bg-contain bg-no-repeat max-sm:h-[80vw] max-sm:bg-cover max-sm:pb-[20vw]"
    >
      <div
        class="relative flex flex-col text-center -translate-y-[1vw] gap-[0.5vw]"
      >
        <div
          class="relative leading-normal text-[#fff] font-medium tracking-[3px] text-[1.35vw] max-sm:text-[3.5vw] max-sm:leading-10"
        >
          {{ $t("EGG-CELLENT EASTER WITH UP TO") }}
        </div>
        <div
          class="relative tracking-[8px] leading-normal text-[#fff] font-black text-[7.5vw] max-sm:text-[13.5vw]"
        >
          50% {{ $t("OFF") }}
        </div>
        <div
          class="relative leading-normal text-[#fff] font-medium text-[1.35vw] mb-[2vw] tracking-[3px] max-sm:text-[3.5vw]"
        >
          {{ $t("SELECTED LINES") }}
        </div>
        <div
          class="relative flex gap-[1vw] justify-center max-sm:gap-[3vw] max-sm:h-[5vw]"
        >
          <nuxt-link
            :to="category?.link"
            class="flex justify-center items-center cursor-pointer text-[#1f414b] bg-[#f5b129] rounded-[0.5vw] font-black tracking-wider text-center py-[0.5vw] px-[2.75vw] text-[1.25vw] transition-transform duration-500 ease-out transform scale-100 hover:scale-105 max-sm:gap-[1vw] max-sm:w-[22vw] max-sm:text-[2.2vw]"
            v-for="category in categories"
            :key="category?.text"
          >
            {{ $t(category?.text) }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    text: "LADIES",
    link: "https://www.rydale.com/pages/ladies",
  },
  {
    text: "MEN'S",
    link: "https://www.rydale.com/pages/mens",
  },
  {
    text: "KID'S",
    link: "https://www.rydale.com/pages/childrens",
  },
];
</script>

<style scoped>
@media screen and (min-width: 1600px) {
}
</style>
