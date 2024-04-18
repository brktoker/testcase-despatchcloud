<template>
  <div
    class="flex flex-col flex-grow-0 justify-start w-full overflow-x-hidden absolute left-0 top-16 bg-white z-50 border-t px-2 pb-12 pt-4 h-screen lg:w-auto lg:max-w[300px] xl:max-w-[789px] lg:h-fit xl:w-[775px] xl:justify-evenly xl:flex-grow lg:flex-row lg:static lg:max-h-full lg:items-center lg:bg-transparent lg:z-10 lg:border-0 lg:p-0"
  >
    <div
      class="group static min-h-[2.3rem] flex items-center mt-2 lg:mt-0"
      :class="{
        'bg-[#f5b12a] rounded-none md:rounded-[10px]': menu?.title === 'SALE',
      }"
      v-for="(menu, index) in navbarLinks"
      :key="index"
    >
      <button
        class="px-6 lg:max-xl:px-2 py-2 text-[#2d2d2d] w-full lg:text-center flex items-center capitalize italic font-droit lg:text-xl lg:py-0 min-[1300px]:px-4 min-[1600px]:px-6"
        :class="{
          '!font-lato !font-black !text-[#20414b] !not-italic !uppercase text-[18px]':
            menu?.title === 'SALE',
        }"
        @mouseover="openMenu"
        @mouseout="closeMenu"
        :ref="menu?.title"
      >
        <div
          class="lg:text-center flex items-center justfiy-center whitespace-nowrap"
        >
          {{ $t(menu?.title) }}
        </div>
        <div
          class="flex lg:hidden ml-auto text-md text-gray-800 hover:text-black"
        >
          <span class="leading-none"
            ><span
              class="inline-flex width-[1em] height-[1em] justify-center items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                width="9"
                height="17"
              >
                <path
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                /></svg></span
          ></span>
        </div>
      </button>
    </div>

    <!-- mobile sidebar other menu items -->
    <div class="block lg:hidden">
      <div class="mx-6 my-4 border-b border-gray-300"></div>

      <!-- account icon  -->

      <div class="w-full">
        <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
          <p class="flex-grow">Account</p>
          <Account />
        </nuxt-link>
      </div>
      <!-- likes icon -->
      <div class="w-full">
        <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
          <p class="flex-grow">Wishlist</p>
          <Likes justifyContent="flex-end" />
        </nuxt-link>
      </div>

      <div class="mx-6 my-4 border-b border-gray-300"></div>

      <div class="w-full">
        <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
          <p class="flex-grow">Rydale</p>
          <div class="flex text-md text-gray-800 hover:text-black">
            <span class="leading-none"
              ><span
                class="inline-flex width-[1em] height-[1em] justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  width="9"
                  height="17"
                >
                  <path
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  /></svg></span
            ></span>
          </div>
        </nuxt-link>
      </div>
      <div class="w-full">
        <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
          <p class="flex-grow">Customer Services</p>
          <div class="flex text-md text-gray-800 hover:text-black">
            <span class="leading-none"
              ><span
                class="inline-flex width-[1em] height-[1em] justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  width="9"
                  height="17"
                >
                  <path
                    d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                  /></svg></span
            ></span>
          </div>
        </nuxt-link>

        <div class="mx-6 my-4 border-b border-gray-300"></div>

        <!-- flag icon -->
        <div class="w-full">
          <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
            <Flag />
            <span class="inline-flex lg:hidden pl-2">
              {{ language + " (" + modalStore?.currency + ")" }}</span
            >
          </nuxt-link>
        </div>

        <div class="mx-6 my-4 border-b border-gray-300"></div>

        <!-- delivery -->

        <div class="w-full">
          <nuxt-link to="/" class="flex items-center mx-4 mt-1 p-2">
            <Delivery />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { navbarLinks } from "~/utils/constants";
import { useModalStore } from "../../stores/modal";
import { languages } from "../../utils/constants";
import Account from "./Account.vue";
import Delivery from "./Delivery.vue";
import Flag from "./Flag.vue";
import Likes from "./Likes.vue";
const modalStore = useModalStore();

const language = computed(() => {
  return languages.find((lang) => lang.code === modalStore?.lang)?.name;
});

const openMenu = (e) => {
  // console.log("open menu");
};

const closeMenu = () => {
  // console.log("close menu");
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1280px) {
}
</style>
