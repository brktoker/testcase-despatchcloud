<template>
  <div class="relative">
    <h2
      class="text-[21px] block text-center relative pb-[1.25rem] mt-[30px] font-droit section-title-homepage"
    >
      {{ $t("Shop Easter Offers") }}
    </h2>
    <div
      class="relative px-2 mx-auto md:flex-no-wrap justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[1700px] max-lg:px-1 mt-3 mb-5"
    >
      <div class="flex-auto" v-for="(item, index) in campains" :key="index">
        <div class="img_card_content overflow-hidden relative" v-if="!item.off">
          <nuxt-link :to="item?.link" class="w-full h-full">
            <NuxtImgComp
              :src="item?.img"
              class="w-full h-full transition duration-300 scale-[1.01] hover:scale-[1.1]"
            />
            <div class="button">{{ $t(item?.button_text) }}</div>
            <div class="price" v-if="item?.price">
              {{ modalStore?.currency + "" + calPriceOpr(+item?.price) }}
            </div>

            <NuxtImgComp
              v-if="item?.off_img"
              :src="item?.off_img"
              class="!absolute w-20 sm:w-32 md:w-20 lg:w-32"
              :style="{
                top: item?.style?.top,
                left: item?.style?.left,
              }"
            />
          </nuxt-link>
        </div>
        <div
          class="relative h-full w-full bg-[#f5b129]"
          :style="{ 'background-color': item?.style?.background }"
          v-else
        >
          <nuxt-link :to="item?.link" class="w-full h-full is_text_content">
            <div class="subtitle">{{ $t(item?.subtitle) }}</div>
            <div class="offText">
              {{ $t(item?.off_text) }}
            </div>
            <div class="title">
              {{ $t(item?.title) }} <br class="max-sm:hidden" />
              {{ $t(item?.title2) }}
            </div>
            <div class="button">{{ $t(item?.button_text) }}</div>
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

const campains = [
  // row 1
  {
    off: false,
    button_text: "SHOP SHOOTING JACKETS",
    price: 65,
    currency: "£",
    img: "/images/campaigns/shooting_jacket.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/djD1tBdRCBNu4Uby-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/5bd8b8e.png",
    link: "https://www.rydale.com/products/lady-gembling-iii-jacket?varian",
    style: {
      top: "22.5%",
      left: "7.5%",
    },
  },
  {
    off: true,
    button_text: "SHOP THE OFFER",
    off_text: "60% OFF",
    subtitle: "HOP TO IT...",
    title: "SELECTED",
    title2: "POLO DRESSES",
    link: "https://www.rydale.com/collections/ladies-dresses",
    style: {
      background: "#f5b129",
    },
  },
  {
    off: false,
    button_text: "SHOP QUILTED JACKETS",
    price: 29.99,
    currency: "£",
    img: "/images/campaigns/quilted_jacket.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/Sr8TuQXomU3v3Fsx-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/c224589.png",
    link: "https://www.rydale.com/products/marske-quilted-jacket?variant=5",
    style: {
      top: "22.5%",
      left: "7.5%",
    },
  },
  {
    off: false,
    button_text: "SHOP CANVAS TRAINERS",
    price: 14.99,
    currency: "£",
    img: "/images/campaigns/canvas_trainer.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/lkwNR59vhclAlDca-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/31da625.png",
    link: "https://www.rydale.com/products/ladies-canvas-trainers-roxby-3?",
    style: {
      top: "45%",
      left: "55%",
    },
  },

  //   row 2
  {
    off: true,
    button_text: "SHOP THE OFFER",
    off_text: "£5 OFF",
    subtitle: "EGG-STRA SPECIAL",
    title: "SELECTED LADIES",
    title2: "RUGBY SHIRTS",
    link: "https://www.rydale.com/collections/ladies-rugby-shirts",
    style: {
      background: "#f587a1",
    },
  },
  {
    off: false,
    button_text: "SHOP PHEASANT GILET",
    price: 25,
    currency: "£",
    img: "/images/campaigns/pheasant_gilet.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/C5uPVKP5BVo9QJla-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/96214c9.png",
    link: "https://www.rydale.com/products/ladies-fleece-gilet-pheasant-em",
    style: {
      top: "22.5%",
      left: "7.5%",
    },
  },
  {
    off: false,
    button_text: "SHOP GIFT CARDS",
    price: "",
    currency: "",
    img: "/images/campaigns/gift_card.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/VPqA5zt3O7RZuTh0-homepage/Full",
    off_img: false,
    link: "https://www.rydale.com/pages/rydale-gift-cards",
    style: {
      top: "0",
      left: "0",
    },
  },
  {
    off: false,
    button_text: "SHOP BABY CLOTHING",
    price: 7.49,
    currency: "£",
    img: "/images/campaigns/baby_clothing.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/ah8u9DT5h5BwRwf7-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/379a18a.png",
    link: "https://www.rydale.com/collections/baby-clothing",
    style: {
      top: "22.5%",
      left: "7.5%",
    },
  },
  // row 3
  {
    off: false,
    button_text: "SHOP MEN’S DECK SHOES",
    price: 35,
    currency: "£",
    img: "/images/campaigns/deck_shoes.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/W1mqiJJRbx735KuU-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/7e590cb.png",
    link: "https://www.rydale.com/products/mens-sandsend-ii-deck-shoes?var",
    style: {
      top: "35%",
      left: "55%",
    },
  },
  {
    off: false,
    button_text: "CHECKED SHIRTS",
    price: 9.99,
    currency: "£",
    img: "/images/campaigns/checked_shirts.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/M8pmyzILU9VQRk0M-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/379a18a.png",
    link: "https://www.rydale.com/products/country-shirt-holly-2?variant=4",
    style: {
      top: "27.5%",
      left: "7.5%",
    },
  },
  {
    off: false,
    button_text: "SHOP POLO SHIRTS",
    price: 14.99,
    currency: "£",
    img: "/images/campaigns/polo_tshirt.jpg",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/LgMwcYrOsdqv6UPF-homepage/Full",
    off_img: "https://www.rydale.com/_nuxt/img/12a9976.png",
    link: "https://www.rydale.com/products/country-shirt-holly-2?variant=4",
    style: {
      top: "12.5%",
      left: "7.5%",
    },
  },
  {
    off: true,
    button_text: "SHOP THE OFFER",
    off_text: "£9 OFF",
    subtitle: "HAPPY EASTER",
    title: "COUNTRY",
    title2: "BEDDING",
    link: "https://www.rydale.com/collections/country-bedding",
    style: {
      background: "#f5b129",
    },
  },
];
</script>

<style lang="scss" scoped>
@mixin button-content {
  position: absolute;
  width: 90%;
  background: #fff;
  left: 50%;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  padding: 10px 0;
  border-radius: 14px;
  transition: transform 0.2s ease-out;
  transform: scale(1) translateX(-50%);
  &:hover {
    transition: transform 0.2s ease-out;
    transform: scale(1.05) translateX(-47.5%);
  }
}

.section-title-homepage::after {
  content: "";
  position: absolute;
  background: #000;
  width: 100px;
  height: 2px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.card_with {
  width: 25% !important;
}

.img_card_content {
  .button {
    @include button-content;
    bottom: 20px !important;
  }

  .price {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1rem;
    font-weight: 700;
    color: red;
  }
}

.is_text_content {
  padding: 70px 20px;
  height: 100%;
  display: inline-block;

  .subtitle {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: normal;
    color: #20414b;
    font-weight: 600;
    font-family: "Lato";
    text-align: center;
    margin-bottom: 20px;
  }

  .offText {
    font-size: 64px;
    letter-spacing: 3px;
    line-height: normal;
    color: #20414b;
    font-weight: 900;
    font-family: "Lato";
    text-align: center;
    margin-bottom: 40px;
  }

  .title {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: normal;
    color: #3f3f3f;
    font-weight: 700;
    font-family: "Lato";
    text-align: center;
    margin-bottom: 40px;
  }

  .button {
    @include button-content;
  }
}

@media screen and (max-width: 1920px) {
  .card_with {
    max-width: 372px;
  }
  .is_text_content {
    padding: 20% 5% 0;
  }
}

@media screen and (min-width: 991px) and (max-width: 1280px) {
  .is_text_content {
    .offText {
      font-size: 4vw;
      margin-bottom: 1rem;
      white-space: nowrap;
    }

    .button {
      font-size: 1.6vw;
    }
  }

  .img_card_content {
    .button {
      font-size: 1.6vw;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .is_text_content {
    padding: 10% 5% 0;
    .subtitle {
      font-size: 2.2vw;
      margin-bottom: 0.5rem;
    }
    .offText {
      font-size: 8vw;
      margin-bottom: 1rem;
    }
    .title {
      font-size: 1.2vw;
      margin-bottom: 1rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .is_text_content {
    padding: 10% 5% 0;
    .subtitle {
      font-size: 3.2vw;
      margin-bottom: 0.5rem;
    }
    .offText {
      font-size: 12vw;
      margin-bottom: 1rem;
    }
    .title {
      font-size: 2.2vw;
      margin-bottom: 1rem;
    }
    .button {
      font-size: 3.2vw;
    }
  }

  .img_card_content {
    .button {
      font-size: 3.2vw;
    }
  }
}
</style>
