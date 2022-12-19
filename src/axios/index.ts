import axios from "axios";
import "nprogress/nprogress.css";
const instance = axios.create({
  // baseURL,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

// 定义一个flag 判断是否刷新Token中
let isRefreshing = false;
// 保存需要重新发起请求的队列

// 添加请求拦截器
instance.interceptors.request.use(
  function (config: any) {
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 对响应错误做点什么

    return Promise.reject(error);
  }
);

export { instance };
