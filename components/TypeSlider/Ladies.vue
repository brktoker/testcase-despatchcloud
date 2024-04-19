<template>
  <Slider :categories="categories" />
</template>

<script setup>
const categories = [
  {
    title: "SHIRTS",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/SnBlf8K8GOHNVwwP-ladies-typeslider-image-1/2400w",
    img: "/images/slider/ladies/1.jpg",
    link: "https://www.rydale.com/collections/ladies-shirts?order=manual",
  },
  {
    title: "Polos & T-Shirts",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/AvLYkHq3T5uqw8O4-ladies-typeslider-image-2/2400w",
    img: "/images/slider/ladies/2.jpg",
    link: "https://www.rydale.com/collections/womens-tops?order=manual",
  },
  {
    title: "Knitwear & Jumpers",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/XbETMRDerhBxndN0-ladies-typeslider-image-3/2400w",
    img: "/images/slider/ladies/3.jpg",
    link: "https://www.rydale.com/collections/ladies-knitwear?order=manual",
  },
  {
    title: "Jackets & Coats",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/BuFiHZFF1BXPa40q-ladies-typeslider-image-4/2400w",
    img: "/images/slider/ladies/4.jpg",
    link: "https://www.rydale.com/collections/ladies-jackets?order=manual",
  },
  {
    title: "FOOTWEAR",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/oW7345M2Oh9lrymg-ladies-typeslider-image-5/2400w",
    img: "/images/slider/ladies/5.jpg",
    link: "https://www.rydale.com/collections/ladies-country-boots-footwear?order=manual",
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
