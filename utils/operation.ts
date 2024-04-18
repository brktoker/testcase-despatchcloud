import { useModalStore } from "../stores/modal";

const store = useModalStore();

export const calPriceOpr = (price: number = 1) => {
  if (store.country === "UK") {
    return price;
  } else {
    return (price * 40).toFixed(2);
  }
};
