import { defineStore } from "pinia";
export const useStore = defineStore("store", {
  state: () => {
    return {
      name: "海马",
      age: 0,
    };
  },
  getters: {},
  actions: {
    happlyBirthday() {
      this.age++;
    },
  },
});
