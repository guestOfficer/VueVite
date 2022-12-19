import { instance } from "../axios/index";
export class api {
  get(url: string, data = {}) {
    return instance.post(url, data);
  }
  post(url: string, data = {}) {
    return instance.post(url, data);
  }
}
