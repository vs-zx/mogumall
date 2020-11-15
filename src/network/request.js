import axios from "axios";

export function request(config) {
  // 1 创建axios实例
  const instance1 = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",    
    timeout: 10000
  });

  // 2 设置拦截器
  instance1.interceptors.request.use(
    function(config) {
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  instance1.interceptors.response.use(
    function(response) {
      if(response.status===200){
        return response.data;
      }else{
        console.log('响应内容出错');
      }
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  // 3 发送请求
  return instance1(config);
}
