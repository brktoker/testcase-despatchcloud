<template>
  <main
    class="min-h-[calc(100vh - 119px)] flex flex-col flex-grow overflow-y-hidden overflow-x-hidden"
  >
    <Banner />
    <LazyCampaigns />
    <LazySubscribe />
    <LazyBestSellers />
    <LazyTypeSelection />
    <LazyTypeSlider />
    <LazyExplore />
  </main>
  <LazyFooter />

  <CountryLangModal v-if="visibleModal" />
</template>

<script setup>
import { useModalStore } from "~/stores/modal";
const modalStore = useModalStore();

const visibleModal = computed(() => {
  return modalStore.$state.visibleModal;
});
</script>
