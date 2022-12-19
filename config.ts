const ENV = (import.meta as any).env.VITE_BASE_URL;
const IMG = (import.meta as any).env.VITE_APP_IMAGE_URL;
export const config = {
  baseUrl: ENV,
  imageUrl: IMG,
  login: "/v1/login", //登录
  getUserInfo: "/v1/resource/userInfo", //获取用户信息
  getHome: "/v1/resource/open/index", //获取首页数据
  getBanners: "/v1/resource/open/getBanners", //获取轮播图
  getBaseData: "/v1/common/resource/getBaseData", //获得基本数据（公用）
  getFileList: "/v1/resource/open/listFile", //获取文件列表
  getPreview: "/v1/resource/preview", //预览文件
  download: "/v1/resource/download", //下载文件
  createOrder: "/v1/resource/order/create", //创建订单
  payOrder: "/v1/resource/order/pay", //支付订单
  vipProducts: "/v1/resource/vipProducts", //会员商品
  getMyFile: "/v1/resource/listMyFile", //购买资料
  listPreviewRecord: "/v1/resource/listPreviewRecord", //我的预览记录列表
  listDownloadRecord: "/v1/resource/listDownloadRecord", //我的下载记录列表
  listMyOrder: "/v1/resource/listMyOrder", //我的订单
  homeUserData: "/v1/resource/index/userData", //用户首页数据
  logout: "/v1/resource/logout", //退出登录
  baseInfo:"/v1/resource/baseInfo",//我的资料
};
