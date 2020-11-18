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
      console.log(config.params);
      if (config.params) {
        if (config.params.type === "pop" && config.params.page > 50) {
          throw new Error("pop页面page只有50页");
        }
        if (config.params.type === "new" && config.params.page > 50) {
          throw new Error("new页面page只有50页");
        }
        if (config.params.type === "sell" && config.params.page > 20) {
          throw new Error("sell页面page只有20页");
        }
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  instance1.interceptors.response.use(
    function(response) {
      if (response.status === 200) {
        return response.data;
      } else {
        console.log("响应内容出错");
      }
    },
    function(err) {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = "请求错误";
            break;
          case 401:
            err.message = "未授权的访问";
            break;
        }
      }
      return Promise.reject(err);
    }
  );

  // 3 发送请求
  return instance1(config);
}
