<template>
  <div class="max-w-[1700px] px-1 xl:mx-auto md:px-8">
    <div
      class="email-signup relative w-full xl:w-[1136px] max-w-[1136px] py-[40px] px-[20px] my-[40px] mx-auto bg-contain text-black text-center"
    >
      <NuxtImgComp
        src="/images/subscribe_background.jpg"
        class="bg-[#fff] absolute top-0 left-0 bottom-0 !h-full !w-full"
      />
      <div class="relative z-1">
        <form class="flex flex-col lg:p-2 mt-4 pb-2 relative">
          <p
            class="text-[25px] leading-[30px] font-bold text-black text-center max-sm:tracking-[0.3px] tracking-wide mb-0 w-full uppercase"
          >
            {{ $t("subscribe_content_title") }}
          </p>
          <div
            class="input_content flex w-full md:w-[40%] lg:w-[60%] xl:w-[40%] h-[34px] my-5 mx-auto relative"
          >
            <input
              type="email"
              :placeholder="t('email_placeholder')"
              required="required"
              class="text-12px w-[75%] bg-white m-0 max-w-full indent-4 outline-none box-border text-black text-left border-[1.5px] border-solid border-black text-[12px] max-sm:w-full"
            />
            <button
              type="button"
              class="py-0 min-w-20 h-full tracking-wide font-semibold text-white bg-black rounded-full border border-solid border-black ml-[5px] uppercase"
            >
              {{ $t("Join") }}
            </button>
          </div>
        </form>
        <p class="text-[14px]">
          {{ $t("subscribe_text") }}
        </p>
        <a
          href="https://www.rydale.com/pages/terms-conditions"
          class="mt-2 italic underline text-[14px] leading-6 tracking-wide"
        >
          {{ $t("subscribe_term") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
@media screen and (min-width: 1600px) {
}
</style>
