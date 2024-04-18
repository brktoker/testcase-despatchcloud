<template>
  <div
    class="fixed top-16 left-0 w-full h-full pt-16 table"
    style="z-index: 999; background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="table-cell">
      <div
        class="relative w-[90%] md:w-[60%] lg:w-[40%] h-fit my-0 mx-auto bg-white opacity-100 rounded-[2px] shadow-modal p-2"
      >
        <!-- modal header -->
        <div class="modal-header">
          <span
            class="text-[22px] font-bold absolute right-3 cursor-pointer"
            @click="closeModal"
          >
            <span class="leading-none flex justify-center items-center">
              <span class="w-[14px] h-[14px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                  width="15"
                  height="22"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>
        <!-- modal body -->
        <div class="my-5 flex flex-col items-center">
          <div
            class="w-full flex text-center flex-col items-center justify-center"
          >
            <div class="font-droit text-[22px] font-bold mb-1">
              {{ $t("shopping_from") }} {{ country?.name + "?" }}
            </div>
            <div class="w-[320px] mt-7 max-w-full">
              <!-- select country -->
              <div class="relative mb-[30px]">
                <label
                  name="country"
                  class="flex justify-start mb-[5px] text-[15px]"
                  >Shipping Country</label
                >
                <v-select
                  :options="countries"
                  label="name"
                  :closeOnSelect="true"
                  :clearable="false"
                  placeholder="Select Country"
                  @option:selected="onSelectCountry"
                  v-model="country"
                >
                  <template #option="{ name, flag }">
                    <div class="w-6 h-auto flex justify-start items-center">
                      <img
                        :src="flag"
                        class="inline-flex w-full h-full object-contain"
                      />
                      <span class="text-nowrap ml-2">{{ name }}</span>
                    </div>
                  </template>

                  <template #selected-option-container="{ option }">
                    <div class="vs__selected">
                      <div class="w-6 h-auto flex justify-start items-center">
                        <img
                          :src="option?.flag"
                          class="inline-flex w-full h-full object-contain"
                        />
                        <span class="text-nowrap ml-2">{{ option?.name }}</span>
                      </div>
                    </div>
                  </template>
                </v-select>
              </div>

              <!-- select language -->
              <div class="relative mb-[30px]">
                <label
                  name="country"
                  class="flex justify-start mb-[5px] text-[15px]"
                  >Language</label
                >
                <v-select
                  :options="languages"
                  label="name"
                  :closeOnSelect="true"
                  :clearable="false"
                  placeholder="Select Language"
                  @option:selected="onSelectLanguage"
                  v-model="language"
                >
                </v-select>
              </div>
            </div>

            <div class="flex flex-col items-center">
              <button
                class="rounded-full bg-[#292929] transition-colors py-2 px-4 text-sm border border-black text-white hover:bg-white hover:text-[#292929]"
                @click="countinueShopping()"
              >
                <div class="flex items-center justify-center z-1">
                  <span class="text-[16px] py-1 px-10 uppercase font-normal">
                    {{ $t("continue") }}
                  </span>
                </div>
              </button>
              <p
                class="text-black text-sm mx-auto my-4 border-b max-w-max cursor-pointer"
                @click="countinueShopping()"
              >
                {{
                  $t("continue_shopping_text") +
                  country?.name +
                  $t("in") +
                  language?.name
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
};
</script>

<script setup>
import { ref } from "vue";
import { useModalStore } from "~/stores/modal";
import { countries, languages } from "~/utils/constants";

const modalStore = useModalStore();
const { locale, setLocale } = useI18n();

const country = ref(
  countries.find((country) => country.code === modalStore.country)
);
const language = ref(languages.find((lang) => lang.code === modalStore.lang));

const closeModal = () => {
  modalStore.closeModal();
};

const onSelectCountry = (country) => {
  // modalStore.changeCountry(country.code);
  //if we need use this func
};

const onSelectLanguage = (language) => {
  // modalStore.changeLanguage(language.code);
  // setLocale(language.code);
  //if we need use this func
};

const countinueShopping = () => {
  if (!country.value || !language.value) return;

  modalStore.changeCountry(country.value);
  modalStore.changeLanguage(language.value.code);
  setLocale(language.value.code);
  modalStore.closeModal();
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1600px) {
}

// .modal-mask {
//   // position: fixed;
//   // z-index: 9998;
//   // top: 63px;
//   // left: 0;
//   // width: 100%;
//   // height: 100%;
//   // background-color: rgba(0, 0, 0, 0.5);
//   // display: table;
//   // padding-top: 60px;
// }

// .modal-wrapper {
//   display: table-cell;
// }

// .modal-container {
//   position: relative;
//   width: 40%;
//   height: -moz-fit-content;
//   height: fit-content;
//   margin: 0 auto;
//   background-color: #fff;
//   opacity: 1;
//   border-radius: 2px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
//   padding: 8px;
// }

// .close-icon {
//   font-size: 22px;
//   font-weight: bolder;
//   position: absolute;
//   right: 10px;
//   cursor: pointer;
// }

// .modal {
//   &__title {
//     font-family: "Droit-Serif", sans-serif;
//     font-size: 22px;
//     font-weight: 700;
//     margin-bottom: 5px;
//   }

//   &__container {
//     width: 320px;
//     margin-top: 30px;
//     max-width: 100%;
//   }
// }
</style>

<style>
@import "vue-select/dist/vue-select.css";

.vs__selected-options {
  padding: 0.3rem !important;
}
</style>
