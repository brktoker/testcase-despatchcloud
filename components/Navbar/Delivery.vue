<template>
  <div class="mr-4 flex items-center">
    <div class="text-3xl text-gray-500 flex-shrink-0">
      <img
        width="40"
        height="20"
        class="w-10 h-auto"
        src="data:image/webp;base64,UklGRoYCAABXRUJQVlA4WAoAAAAQAAAAMwAAGQAAQUxQSB4CAAABkG1bmyFJX9u27bFt255LPodt27Zt27Ydf0RWzeQkLzKnKnqeICImAK4F9Ro1rFe3dq2aNWvVqlO3Xr36DWrVbVQZjWr9rJArd5IrJ+Lau7kJ8qzfXsu0bEPXNE3TdcOybcvQLZUzro6SNYSfzwwGAsMio2JioiMjwoIDAXYLCbXaHmeeyZLq0BH4X4ubcLZhrIWULV6xSkK+orpg3O8HMnYKQeuqI8BmLf2r4kptOi2hUOFuGO9d4V8bZjZnRyXU4J5TZ5xn53K6efH43g2LJ7dr06quS2Oym7EjEqBwctcmM0ZEzJWuxLk1ZYdkoH+3Hs6+49G+a/eeUxes3nns+jvDUCL/sU+K5Liz2mqgOTP/K1TyP0A30hvS/v8o16NFAY+8f9lMt7yihOqIKCpwMcIBXCQx3NHsnUdRt4TICp2rKwr1Q6HCFgFAD7LKgGZMWB6hfk2Vk3pbJa9BNANnSCkCgJOa2N5YiGHBKD9r35Gzx35TH+hFdP2Oh3VxRC1XiPhQAEg1qVf7Dr627xqHth3bc6UIAIYKwfkPuBcuYryWA5NU5u/f54wxbRWc0ZpRURM+KrzKZYm4d9XnyzcZmRev0mGXGO1PCnw9JoY5UlXqAz9b9ADqkDfL0Y8+wOe6RAOArL32U0g9Zt8rAzoL6ucbujKu/fCqSqqc1Oea+OFhYhn87SoEV86EQnLkFi/n5khILK/MRzVmVlTgn1ZQOCBCAAAA8AMAnQEqNAAaAD59LpFHpKKhoTfoAJAPiWkAAWFIPlz3LqFLrwjoAAD+yDOX/LN3Owg/18IT+9jqT/A+f//wnAAA"
        alt="delivery-icon"
      />
    </div>
    <div
      class="ml-4 whitespace-nowrap flex-grow flex flex-row lg:flex-col items-center justify-start lg:items-start leading-none"
    >
      <div class="font-normal lg:font-bold text-[#757575] uppercase">
        {{ $t("Free Delivery") }}
      </div>
      <div
        class="text-sm italic leading-normal lg:!leading-none font-normal tracking-wide ml-1 lg:ml-0"
      >
        <span class="hidden lg:inline-flex">{{ $t("on orders over") }}</span>
        {{ modalStore?.currency + "" + price + "*" }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useModalStore } from "~/stores/modal";
const modalStore = useModalStore();

const price = ref(60);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1600px) {
}
</style>
