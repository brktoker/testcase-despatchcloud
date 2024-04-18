<template>
  <div class="justify-center items-center mr-2 flex" @click="openLanguageModal">
    <button
      class="relative text-xl hover:text-black items-center justify-center"
    >
      <img
        :src="modalStore?.flag"
        alt="flag-icon"
        width="25"
        height="25"
        class="rounded-full bg-auto bg-no-repeat !w-[25px] !h-[25px] object-cover object-center"
      />
    </button>
  </div>
</template>

<script setup>
import { useModalStore } from "../../stores/modal";
const modalStore = useModalStore();

const openLanguageModal = () => {
  modalStore.openModal();
};
</script>

<style lang="scss" scoped></style>
