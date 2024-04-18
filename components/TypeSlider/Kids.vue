<template>
  <Slider :categories="categories" />
</template>

<script setup>
const categories = [
  {
    title: "SHIRTS & POLOS",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/eqBQrMOF0IGIss8m-kids-typeslider-image-1/2400w",
    img: "/images/slider/kids/1.jpg",
  },
  {
    title: "Knitwear & Jumpers",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/X4dFhwqreOGwXMD9-kids-typeslider-image-2/2400w",
    img: "/images/slider/kids/2.jpg",
  },
  {
    title: "Jackets & Coats",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/ANc3wCiRGUfQ5Yyf-kids-typeslider-image-3/2400w",
    img: "/images/slider/kids/3.jpg",
  },
  {
    title: "FOOTWEAR",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/jidIGdXwn6DN0GSi-kids-typeslider-image-4/2400w",
    img: "/images/slider/kids/4.jpg",
  },
  {
    title: "Baby clothing",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/ogSKX7jQvOSWxN6V-kids-typeslider-image-5/2400w",
    img: "/images/slider/kids/5.jpg",
  },
];
</script>

<style lang="scss" scoped>
.product-image {
  display: block;
  margin: 0 auto;
  transition: transform 0.2s ease-out;
  transform: scale(1);
  max-width: 200px;
  height: 300px !important;
  &:hover {
    transform: scale(1.1);
  }
}

@media screen and (min-width: 640px) {
  .product-image {
    width: 100%;
  }
}
</style>
