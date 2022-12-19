import { defineStore } from "pinia";
import { api } from "../http/index";
import { config } from "../config/index";
interface arr {
  prompt: string;
}
export const openAi = defineStore("store", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async openAi(data: arr) {
      const serve = new api();
      return await serve.post(config.baseUrl + config.openAi, data);
    },
  },
});




