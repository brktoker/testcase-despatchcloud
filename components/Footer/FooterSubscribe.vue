<template>
  <div
    class="w-full lg:w-1/3 order-1 lg:order-3 mb-4 lg:mb-0 lg:px-3 mt-5 md:mt-0 lg:max-w-[362px]"
  >
    <h3 class="text-[15px] mb-2 ml-4 lg:ml-0 break-words tracking-wider">
      {{ $t("Subscribe for your chance to") }}
      <nuxt-link to="/" class="font-semibold underline">
        {{ $t("win a £100 Gift Card") }} !*</nuxt-link
      >
    </h3>
    <form
      class="border-b-2 border-black border-solid flex lg:p-2 mt-2 relative"
    >
      <input
        type="text"
        :placeholder="t('email_placeholder')"
        class="flex-grow text-[15px] ml-4 lg:ml-0 outline-none"
      />
      <button type="button" class="flex items-center font-black mr-4 lg:mr-0">
        <span class="text-[15px] uppercase">{{ $t("Join") }}</span>
        <span class="leading-none ml-2 text-sm">
          <span
            class="inline-flex justify-center items-center w-[14px] h-[14px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              width="7"
              height="14"
            >
              <path
                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
              />
            </svg>
          </span>
        </span>
      </button>
      <div class="absolute bottom-0 w-full pt-2 overflow-hidden"></div>
    </form>
    <span class="text-[12px] hidden md:block ml-4 lg:ml-0 mt-2">
      {{ $t("footer_sub_text") }}
      <nuxt-link to="/" class="underline">{{ $t("View T&Cs") }}</nuxt-link>
    </span>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
