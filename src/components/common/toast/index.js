import Toast from "./Toast";

// 创建处理对象
const obj = {};

obj.install = function(vue) {
  // 1 创建组件构造器
  const toastConstructor = vue.extend(Toast);
  // 2 new ,创建组件对象  —— 虚拟
  const toast = new toastConstructor();
  // 3 手动挂载   —— 真实的
  toast.$mount(document.createElement("div"));
  // 4 追加到html中
  document.body.appendChild(toast.$el);
  // 5 将Toast对象挂到vue实例上
  vue.prototype.$toast = toast;
  // console.log(vue.prototype.$toast);
};

// 导出
export default obj;
