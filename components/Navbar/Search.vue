<template>
  <form
    class="flex ml-auto max-w-[250px] items-center justify-end px-4 py-1 pt-16 fixed top-0 bottom-0 left-0 bg-white w-full mt-2 z-50 lg:z-0 lg:flex-1 lg:py-0 lg:relative lg:mt-0 lg:opacity-100 lg:visible"
  >
    <div class="rounded-full w-full relative">
      <input
        type="text"
        class="p-2 font-lato placeholder:text-gray-500 w-full pl-5 bg-[#f1f1f1] text-current rounded-[20px] italic !font-light text-[15px] focus-within:outline-none"
        :placeholder="$t('search')"
      />
      <div
        class="absolute top-0 right-0 flex items-center justify-center h-full mr-2 cursor-pointer w-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            fill="current"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped>
@media only screen and (min-width: 1650px) {
}
</style>
