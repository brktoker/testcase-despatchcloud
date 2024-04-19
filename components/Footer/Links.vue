<template>
  <div class="w-full lg:w-1/3 order-2 lg:order-1 lg:block lg:max-w-[362px]">
    <div class="flex w-full">
      <div class="w-1/2 px-2 lg:px-0">
        <ul class="text-[15px] min-w-[140px] tracking-wider leading-[1.75]">
          <li v-for="(link, index) in links1" :key="index">
            <nuxt-link :to="link?.url" class="hover:underline">{{
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
            <nuxt-link :to="link?.url" class="hover:underline">{{
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
  { name: "About Rydale", url: "https://www.rydale.com/pages/about-us" },
  {
    name: "Careers at Rydale",
    url: "https://www.rydale.com/pages/rydale-jobs",
  },
  {
    name: "Find a Stockist",
    url: "https://www.rydale.com/pages/store-locator",
  },
  { name: "Shows & Events", url: "https://www.rydale.com/pages/shows-events" },
  { name: "Contact Rydale", url: "https://www.rydale.com/pages/contact-us" },
  { name: "Tel: 01377 337160", url: "tel:01377337160" },
];

const links2 = [
  { name: "Help & FAQ", url: "https://www.rydale.com/pages/faq" },
  {
    name: "Returns & Refunds",
    url: "https://www.rydale.com/pages/faq#returnPolicy",
  },
  { name: "Delivery Info", url: "https://www.rydale.com/pages/delivery-info" },
  {
    name: "Terms & Conditions",
    url: "https://www.rydale.com/pages/terms-conditions",
  },
  {
    name: "Privacy Policy",
    url: "https://www.rydale.com/pages/privacy-policy",
  },
  {
    name: "Choose Your Country or Region",
    url: "https://www.rydale.com/pages/choose-country-region",
  },
  { name: "Sitemap", url: "https://www.rydale.com/pages/sitemap" },
];
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1600px) {
}
</style>
