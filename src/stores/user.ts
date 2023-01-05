import { defineStore } from "pinia";
import { api } from "../http/index";
import { config } from "../config/index";
interface UserData {
  name: string;
  password:string,
}

export const user = defineStore("store", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async login(data: UserData) {
      const serve = new api();
      return await serve.post(config.baseUrl + config.login, data);
    },
    async add(data: UserData) {
        const serve = new api();
        return await serve.post(config.baseUrl + config.add, data);
      },
  },
});



