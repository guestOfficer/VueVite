import { defineStore } from "pinia";
import { api } from "../http/index";
import { config } from "../config/index";

declare namespace Service {
  interface userData {
    name?: string | boolean;
    password: string | boolean;
    email: string | boolean;
  }
}

const serve = new api();
export const user = defineStore("store", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async login(data: Service.userData): Promise<any> {
      return await serve.post(config.baseUrl + config.login, data);
    },
    async add(data: Service.userData) {
      return await serve.post(config.baseUrl + config.add, data);
    },
  },
});
