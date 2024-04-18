<template>
  <div class="max-w-[1600px] mt-[2.5rem] mx-auto mb-0 w-full">
    <div
      class="type-selection-title text-[21px] font-droit block text-center relative py-[1.25rem] px-0 mb-5"
    >
      {{ $t("Who Are You Shopping For?") }}
    </div>
    <div
      class="type-selection-content flex justify-center items-center max-[800px]:flex-col max-[800px]:px-4 w-full"
    >
      <nuxt-link
        to="/"
        class="relative flex justify-center overflow-hidden cursor-pointer my-2 mx-4 max-[800px]:w-full w-1/3 xl:w-1/4"
        v-for="(type, index) in types"
        :key="index"
      >
        <NuxtImgComp
          :src="type?.img"
          class="h-auto w-full block transition-transform transition-rotate ease-out duration-200 transform scale-100 object-contain hover:transition-transform hover:duration-500 hover:transform hover:scale-110 hover:-skew-y-3 hover:skew-x-3"
          width="400"
          height="267"
        />
        <span
          class="bg-white bg-opacity-90 w-[200px] text-center rounded-full py-2 px-16 max-w-[400px] uppercase text-black absolute bottom-16 text-lg font-bold hover:transition-transform hover:transform hover:skew-y-3 hover:-skew-x-3 max-[800px]:text-[4.2vw] max-[800px]:p-[3.2vw] sm:max-[800px]:w-[300px]"
          >{{ $t(type?.title) }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const types = [
  {
    title: "Ladies",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/GLMnWhEP2xkzsOzI-gender-links-ladies/2400w",
    img: "/images/type-selections/ladies.jpg",
  },
  {
    title: "MEN'S",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/waVcnAU1NO6QGzQt-gender-links-mens/2400w",
    img: "/images/type-selections/mens.jpg",
  },
  {
    title: "KID'S",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/xzLAPcevqHL85KN3-gender-links-kids/2400w",
    img: "/images/type-selections/kids.jpg",
  },
];
</script>

<style lang="scss" scoped>
.type-selection-title {
  &::after {
    content: "";
    position: absolute;
    background: #000;
    width: 100px;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
