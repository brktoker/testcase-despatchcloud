<template>
  <div class="w-full lg:w-1/3 order-2 lg:order-1 lg:block lg:max-w-[362px]">
    <div class="flex w-full">
      <div class="w-1/2 px-2 lg:px-0">
        <ul class="text-[15px] min-w-[140px] tracking-wider leading-[1.75]">
          <li v-for="(link, index) in links1" :key="index">
            <nuxt-link to="/" class="hover:underline">{{
              $t(link?.name)
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-1/2 px-2 text-right lg:text-left">
        <ul
          class="text-[15px] min-w-[140px] tracking-wider leading-[1.75] ml-4"
        >
          <li v-for="(link, index) in links2" :key="index">
            <nuxt-link to="/" class="hover:underline">{{
              $t(link?.name)
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const links1 = [
  { name: "About Rydale" },
  { name: "Careers at Rydale" },
  { name: "Find a Stockist" },
  { name: "Shows & Events" },
  { name: "Contact Rydale" },
  { name: "Tel: 01377 337160" },
];

const links2 = [
  { name: "Help & FAQ" },
  { name: "Returns & Refunds" },
  { name: "Delivery Info" },
  { name: "Terms & Conditions" },
  { name: "Privacy Policy" },
  { name: "Choose Your Country or Region" },
  { name: "Sitemap" },
];
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1600px) {
}
</style>
