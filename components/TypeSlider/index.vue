<template>
  <div
    class="flex justify-center flex-col uppercase font-bold mt-[2rem] mx-auto mb-[3rem] max-w-[1600px] w-full"
  >
    <div class="mb-[2rem] flex justify-center">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="[
          'py-[1rem] px-[2rem] border-b-2 border-solid border-transparent text-[16px] font-bold uppercase text-[#757575] transition-colors duration-200 ease-out ',
          {
            active: activeTab === tab,
          },
        ]"
        @click="activeTab = tab"
      >
        {{ $t(tab_text(tab)) }}
      </button>
    </div>
    <keep-alive>
      <Transition name="fade" appear>
        <component :is="tabs[activeTab]"></component>
      </Transition>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Kids from "./Kids.vue";
import Ladies from "./Ladies.vue";
import Mens from "./Mens.vue";

const activeTab = ref("Ladies");

const tabs = {
  Ladies,
  Mens,
  Kids,
};

const tab_text = (tab) => {
  switch (tab) {
    case "Ladies":
      return "Ladies";
    case "Mens":
      return "Men's";
    case "Kids":
      return "Kid's";
    default:
      return "Ladies";
  }
};
</script>

<style scoped>
.active {
  border-bottom-color: #000 !important;
  color: #000 !important;
  transition: border-bottom-color 0.3s ease-out;
}
</style>
