import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    visibleModal: false,
    lang: "en",
    country: "UK",
    flag: "https://www.rydale.com/_nuxt/img/bc9789d.png",
    currency: "£",
  }),
  getters: {},
  actions: {
    openModal() {
      this.visibleModal = true;
    },
    closeModal() {
      this.visibleModal = false;
    },
    changeLanguage(lang: string) {
      this.lang = lang;
    },
    changeCountry(country: any) {
      this.country = country?.code;
      this.flag = country?.flag;
      this.currency = country?.currency;
    },
  },
  persist: true,
});
