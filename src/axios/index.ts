import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";
import { ElNotification } from "element-plus";
const instance: AxiosInstance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  }
);

instance.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { msg, message } = await response.data;
    if (msg != "0") {
      ElNotification.error(message);
    }
    return response;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  }
);
export { instance };
