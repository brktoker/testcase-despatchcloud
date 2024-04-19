<template>
  <div>
    <h2
      class="block text-center relative pb-[1.25rem] mt-[30px] font-droit text-[21px] text-[#292929] section-title-ourbestseller"
    >
      {{ $t("Explore Our Best Sellers") }}
    </h2>
    <div class="max-w-[1700px] mx-auto">
      <div
        class="grid gap-1 grid-cols-2 md:gap-2 md:grid-cols-3 lg:gap-4 lg:grid-cols-4 text-center px-2"
      >
        <div
          class="w-full px-2 lg:mx-1 sm:px-0 mt-10"
          v-for="(item, index) in bestSellers"
          :key="index"
        >
          <nuxt-link :to="item?.link" class="relative flex flex-col">
            <div class="inline-block overflow-hidden w-full">
              <div
                class="absolute right-0 top-[1rem] z-10 w-auto h-[30px] py-0 px-[0.4rem] bg-[#3d7dca] text-white text-[19px] flex items-center justify-center uppercase"
                :style="!item?.new ? 'display:none' : 'display:block'"
              >
                {{ $t("New") }}
              </div>
              <div>
                <NuxtImgComp
                  v-if="item?.off_img"
                  :src="item?.off_img"
                  class="!absolute top-0 right-0 !z-10 p-4 w-[45%] !max-w-[135px] !h-auto"
                  width="134"
                  height="134"
                />
              </div>
              <div>
                <NuxtImgComp
                  :src="item?.img"
                  class="relative w-full h-full transition duration-300 scale-[1.01] hover:scale-[1.1]"
                />
              </div>
            </div>
            <div
              class="text-center font-semibold mt-4 text-black hover:underline"
            >
              {{ $t(item?.title) }}
            </div>
            <div
              class="flex justify-center items-center mt-2 text-sm md:text-base"
            >
              <div class="text-black">
                <span class="font-bold text-black font-droit">
                  {{
                    item?.text +
                    " " +
                    modalStore?.currency +
                    "" +
                    calPriceOpr(+item?.price)
                  }}
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "~/stores/modal";
import { calPriceOpr } from "~/utils/operation";
const modalStore = useModalStore();

const bestSellers = [
  // row 1
  {
    new: true,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/RdNO08MbvXR3hSq4-ink-mens-huggate-waistcoat/2400w",
    img: "/images/best-sellers/mens_fleece_waistcoat.jpg",
    off_img: "",
    text: "",
    title: "Men's Fleece Waistcoat - Huggate",
    link: "https://www.rydale.com/products/mens-huggate-fleece-waistcoat?v",
    price: 39.99,
    currency: "£",
    style: false,
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/aVRwdwFENerRxJAk-best-seller-2/2400w",
    img: "/images/best-sellers/fleece_dog_jumper.jpg",
    off_img: "",
    text: "From",
    title: "Fleece Dog Jumper - Yapham",
    link: "https://www.rydale.com/products/fleece-dog-jumper?variant=39366",
    price: 11.99,
    currency: "£",
    style: false,
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/gsxeFLaKBTajRIBa-best-seller-3/2400w",
    img: "/images/best-sellers/ladies_fleece_waistcoat.jpg",
    off_img: "",
    text: "",
    title: "Ladies Fleece Waistcoat - Huggate",
    link: "https://www.rydale.com/products/ladies-huggate-fleece-waistcoat",
    price: 39.99,
    currency: "£",
    style: false,
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/zKTnbCAZP8WFOiny-best-seller-4/2400w",
    img: "/images/best-sellers/ladies_wool_felt_hat.jpg",
    off_img: "",
    text: "",
    title: "Ladies Wool Felt Hat - Danby",
    link: "https://www.rydale.com/products/wool-felt-hat-danby?variant=312",
    price: 44.99,
    currency: "£",
    style: false,
  },

  //   row 2
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/4c93zjxWf3bYQpSG-mens-unbadge-image-01/2400w",
    img: "/images/best-sellers/men_checked_shirts.jpg",
    off_img: "https://www.rydale.com/_nuxt/img/23bc1ef.png",
    text: "",
    title: "Men's Checked Shirts - Richmond",
    link: "https://www.rydale.com/collections/deal-2-for-35",
    price: 19.99,
    currency: "£",
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/DOEAKY5V4Zvx1CjX-best-seller-6/2400w",
    img: "/images/best-sellers/polo_belts.jpg",
    off_img: "",
    text: "",
    title: "Polo Belts - Askwith",
    link: "https://www.rydale.com/products/polo-belts?variant=394410018734",
    price: 29.99,
    currency: "£",
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/PeInrOYvsF00R29Y-best-seller-7/2400w",
    img: "/images/best-sellers/ladies_Tall_suede.jpg",
    off_img: "",
    text: "",
    title: "Ladies Tall Suede Country Boots - Helmsley",
    link: "https://www.rydale.com/products/helmsley-suede-spanish-riding-b",
    price: 149.99,
    currency: "£",
  },
  {
    new: false,
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/KQFlgyxAyR04Z90v-mens-unbadge-image-02/2400w",
    img: "/images/best-sellers/men_overhead_fleece.jpg",
    off_img: "",
    text: "",
    title: "Men's Overhead Fleece - Huggate",
    link: "https://www.rydale.com/products/mens-huggate-overhead-fleece?va",
    price: 42.99,
    currency: "£",
  },
];
</script>

<style lang="scss" scoped>
.section-title-ourbestseller {
  &::after {
    content: "";
    position: absolute;
    background: #000;
    width: 100px;
    height: 2px;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
