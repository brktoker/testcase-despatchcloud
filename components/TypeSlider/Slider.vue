<template>
  <div class="flex relative justify-between">
    <div class="pb-0 absolute z-10 h-full md:hidden top-0 left-0">
      <button
        class="p-2 lg:p-3 h-full bg-white opacity-60 text-black font-bold flex justify-center items-center"
      >
        <span class="leading-none">
          <span
            class="w-[1rem] h-[1rem] inline-flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="28"
              height="28"
              class="!opacity-80"
            >
              <path
                d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
              ></path>
            </svg>
          </span>
        </span>
      </button>
    </div>
    <div
      class="flex justify-around max-[1200px]:overflow-x-scroll mx-auto overflow-y-hidden h-full"
    >
      <nuxt-link
        to="/"
        class="flex flex-col overflow-hidden relative my-0 mx-[1rem] min-w-[200px]"
        v-for="(category, index) in categories"
        :key="index"
      >
        <NuxtImgComp
          :src="category?.img"
          class="block my-0 mx-auto sm:m-w-[400px] md:m-w-[200px] object-contain transition-transform duration-300 hover:scale-[1.1]"
          width="200"
          height="300"
        />
        <span class="text-center mt-[1rem] uppercase hover:underline">
          {{ $t(category?.title) }}
        </span>
      </nuxt-link>
    </div>
    <div class="pb-0 absolute z-10 h-full md:hidden top-0 right-0">
      <button
        class="p-2 lg:p-3 h-full font-bold bg-white opacity-60 text-black flex justify-center items-center"
      >
        <span class="leading-none">
          <span
            class="w-[1rem] h-[1rem] inline-flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="28"
              height="28"
              class="!opacity-80"
            >
              <path
                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
              ></path>
            </svg>
          </span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped></style>
