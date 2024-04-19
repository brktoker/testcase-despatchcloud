<template>
  <div class="flex justify-center px-8 xl:px-16 mt-8">
    <div class="flex justify-center flex-wrap">
      <div class="w-full">
        <h1 class="px-3 font-droit font-normal text-center text-xl">
          {{ $t("Country Clothing & Country Wear From Rydale") }}
        </h1>
        <div class="flex items-center justify-center">
          <div class="w-20 my-4 border-b-2 border-black"></div>
        </div>
        <div>
          <div
            class="transition duration-300"
            :class="{ 'max-h-[7rem] overflow-hidden': !expand }"
            :style="expand ? 'max-height: 1296px' : ''"
          >
            <p class="px-3 text-center" @click="expand = !expand">
              {{ $t("rydale_story") }}
              <a href="https://www.rydale.com/collections/mens-tweed-blazers">{{
                $t("quality country tweed jackets")
              }}</a
              >, {{ $t("casual rural style wear, a wide collection of") }}
              <a href="https://www.rydale.com/collections/mens-hats-caps">{{
                $t("flat caps")
              }}</a
              >,
              {{
                $t(
                  "British eventing equestrian outfits, traditional English clay and pheasant"
                )
              }}
              <a
                href="https://www.rydale.com/collections/mens-shooting-clothing"
                >{{ $t("shooting clothing") }}</a
              >, {{ $t("fashion jodhpurs, farmers clothing") }},
              <a
                href="https://www.rydale.com/collections/ladies-country-boots-footwear"
                >{{ $t("country boots") }},
              </a>
              {{ $t("rydale_story_2") }} &nbsp;
            </p>
          </div>
          <div class="relative h-1">
            <div
              class="smooth-area absolute bottom-0 left-0 w-full text-2xl flex justify-center"
              v-if="!expand"
            >
              <button type="button" @click="expand = true" aria-label="down">
                <span class="leading-none">
                  <span class="inline-flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="21"
                      height="24"
                    >
                      <path
                        d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expand = ref(false);
</script>

<style lang="scss" scoped>
a {
  color: #12589b !important;
}
@media screen and (min-width: 991px) {
  .smooth-area {
    background: linear-gradient(0deg, #fff, #fff 60%, hsla(0, 0%, 100%, 0));
  }
}

.smooth-area {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.6) 60%,
    #fff
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#ffffff",GradientType=0);
}
</style>
