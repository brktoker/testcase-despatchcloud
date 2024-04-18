<template>
  <Slider :categories="categories" />
</template>

<script setup>
const categories = [
  {
    title: "SHIRTS",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/UINjJG9o04924LC0-mens-typeslider-image-1/2400w",
    img: "/images/slider/mens/1.jpg",
  },
  {
    title: "Polos & T-Shirts",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/nHkqoSrf6vkP94vZ-mens-typeslider-image-2/2400w",
    img: "/images/slider/mens/2.jpg",
  },
  {
    title: "Knitwear & Jumpers",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/m1mBTnLZXnZ6RyNz-mens-typeslider-image-3/2400w",
    img: "/images/slider/mens/3.jpg",
  },
  {
    title: "Jackets & Coats",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/SLaGR4FDFg2kjpKl-mens-typeslider-image-4/2400w",
    img: "/images/slider/mens/4.jpg",
  },
  {
    title: "FOOTWEAR",
    // img: "https://imagedelivery.net/qQVYSIvyXiV4MHZje7HLkA/OEt0JddW6nTrDi2A-mens-typeslider-image-5/2400w",
    img: "/images/slider/mens/5.jpg",
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
