<template>
  <div
    class="sticky top-0 left-0 right-0 flex items-center w-full px-2 lg:px-8 h-16 bg-white border-b justify-start flex-shrink-0 flex-grow-0 !z-50"
  >
    <MobileSidebar
      @openSidebar="openSidebar"
      :visibleNavMenu="visibleNavMenu"
      class="flex lg:hidden"
    />
    <MobileSearch
      @openSidebar="openSidebar"
      :visibleNavSearch="visibleNavSearch"
      class="flex lg:hidden"
    />
    <!-- Logo -->
    <nuxt-link
      to="/"
      class="flex items-center justify-center flex-shrink-0 h-full mx-auto lg:ml-2 lg:mr-8 xl:mr-8 !z-50"
    >
      <NuxtImgComp
        src="/images/rydale.svg"
        class="object-fit"
        width="112"
        height="45"
      />
    </nuxt-link>

    <NavMenu class="hidden lg:flex" />
    <Search class="hidden lg:flex" />
    <div class="flex justify-center items-center h-full flex-shrink-0">
      <Delivery class="hidden visible_delivery" />

      <!-- //flag icons for i18n -->
      <Flag class="hidden lg:flex" />

      <!-- //likes icon -->
      <Likes />

      <!-- //user account icon -->
      <Account class="hidden lg:flex" />

      <!-- //cart icon -->
      <Cart />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileSearch from "../Mobile/Search.vue";
import MobileSidebar from "../Mobile/Sidebar.vue";
import Account from "./Account.vue";
import Cart from "./Cart.vue";
import Delivery from "./Delivery.vue";
import Flag from "./Flag.vue";
import Likes from "./Likes.vue";
import NavMenu from "./Menu.vue";
import Search from "./Search.vue";

const visibleNavMenu: any = ref(false);
const visibleNavSearch: any = ref(false);

const openSidebar = (side: any) => {
  if (side === "navMenu") {
    visibleNavMenu.value = !visibleNavMenu.value;
    visibleNavSearch.value = false;
  } else if (side === "navSearch") {
    visibleNavSearch.value = !visibleNavSearch.value;
    visibleNavMenu.value = false;
  }
};
</script>

<style scoped>
@media screen and (min-width: 1600px) {
  .visible_delivery {
    display: flex;
  }
}
</style>
