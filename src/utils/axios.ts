import axios from 'axios';
import config from '@/config';

const baseURL = config.url.basicUrl;
const $axios = axios.create({
  baseURL,
  withCredentials: true, // 允许携带cookie
  timeout: 10000, // 超时时间
  retry: 2, // 超时请求次数
  retryDelay: 1000, // 超时请求间隙
});

// 请求拦截
$axios.interceptors.request.use(
  (config: any) => {
    // 处理请求之前的配置
    // if (store.getters.token) {
    //   config.headers['token'] = getToken();
    // }
    return config;
  },
  (error: any) => {
    // 请求失败的处理
    return Promise.reject(error);
  },
);

// 响应拦截
$axios.interceptors.response.use(
  (response: any) => {
    // 处理响应数据
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      const error = new Error(response.statusText);
      // throw error;
      return error;
    }
  },
  (error: any) => {
    //请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') != -1
    ) {
      const config = error.config;
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) return Promise.reject(error);

      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 1;

      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        return Promise.reject(error);
      }

      // Increase the retry count
      config.__retryCount += 1;

      // Create new promise to handle exponential backoff
      let backoff = new Promise(resolve => {
        setTimeout(() => {
          // console.log("resolve");
          resolve();
        }, config.retryDelay || 1);
      });

      return backoff.then(() => $axios(config));
    } else {
      // 处理响应失败
      // console.log("err" + error);
      return Promise.reject(error);
    }
  },
);

export default $axios;
