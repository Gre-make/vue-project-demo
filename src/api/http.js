import axios from "axios"; // 引用axios
import config from "./config";

const instance = axios.create({
  baseURL: config.baseUrl.dev,
  timeout: 60000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    //添加header
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept-Language'] = 'zh-CN'
    config.headers['token'] = '187116!@#POI+{:'
    if (config.method === 'post') {
        if (!config.data) { // 没有参数时，config.data为null，需要转下类型
            config.data = {}
        }
        // config.data = JSON.stringify(config.data) // qs序列化参数
    }
    return config
},
err => {
    //Promise.reject()方法返回一个带有拒绝原因的Promise对象，在F12的console中显示报错
    Promise.reject(err)
}
);
//get请求
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}