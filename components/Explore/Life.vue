<template>
  <div class="flex justify-center mt-8">
    <div class="flex flex-wrap w-full max-w-4xl">
      <div
        class="w-full lg:w-1/4 lg:pr-8 flex flex-col justify-center items-center lg:items-start mt-8"
      >
        <h2 class="text-center lg:text-left font-medium text-3xl font-droit">
          {{ $t("Rydale Life") }}
        </h2>
        <div class="w-10 border border-gray-300 my-2"></div>
        <p class="text-center lg:text-left font-light mb-2 text-lg italic">
          {{ $t("Great reads from our blog") }}
        </p>
        <nuxt-link to="/" class="underline">{{ $t("See All") }}</nuxt-link>
      </div>
      <div class="w-full lg:w-3/4 flex flex-wrap mt-8 p-4">
        <div
          class="w-1/2 md:w-1/3 p-4"
          :class="content?.class"
          v-for="(content, index) in lifeContents"
          :key="index"
        >
          <nuxt-link to="/">
            <div
              class="trans-shadow relative block shadow-md hover:shadow-xl border border-gray-200 h-full"
            >
              <NuxtImgComp
                :src="content?.img"
                width="180"
                height="180"
                class="w-full"
              />
              <p class="p-2 text-sm">
                {{ $t(content?.title) }}
              </p>
              <span
                class="leading-none absolute top-0 right-0 text-white text-lg px-2 py-1"
                v-if="content?.icon"
              >
                <span
                  class="inline-flex w-[1rem] h-[1rem] justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="15.75"
                    height="18"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lifeContents = [
  {
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/hhWWcdtk5ZW6V474-/2400w",
    img: "/images/life/1.jpg",
    title: "Dog Friendly Beaches in Norfolk",
    icon: false,
    class: "",
  },
  {
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/Gh0McBzKAnGh9Zyy-/2400w",
    img: "/images/life/2.jpg",
    title: "5 Smart Casual Outfit Ideas",
    icon: false,
    class: "max-md:hidden",
  },
  {
    // img: "https://www.rydale.com/_nuxt/img/11b753a.gif",
    img: "/images/life/3.gif",
    title: "Don't forget to follow us on instagram",
    icon: true,
    class: "",
  },
];
</script>

<style lang="scss" scoped>
.trans-shadow {
  transition-property: box-shadow;
  transition-duration: 0.2s;
}
</style>
