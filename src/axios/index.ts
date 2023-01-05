import axios from "axios";
import { ElMessage } from "element-plus";
import "nprogress/nprogress.css";
const instance = axios.create({
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config):any {
    // console.log(config);
    return config;
  },
  function (error):any {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response):any {
    if (response.data.msg == 0) {
      return response.data;
    }
    ElMessage.error(response.data.message);
    return response;
  },
  function (error):any {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { instance };

