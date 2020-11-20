// 内存存储所有添加在购物车的商品
// 并动态计算   选中商品列表  和   未选择的商品
// ---- 当点击购买时，将已经选中的商品，加入到已购买清单  - 存一份
//                  未购买的商品，作为购物车内所有的商品存在
// 未选中的商品不参与价格计算

const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartCount(state, getters) {
    return getters.cartList.length;
  },
  // 过滤选中的商品列表
  checkedList(state, getters) {
    return getters.cartList.filter(item => item.checked);
  },
  // 计算选中的商品数
  checkedCount(state, getters) {
    return getters.checkedList.reduce((prev, cur) => {
      return prev + cur.count;
    }, 0);
  },
  // 过滤没有选中的商品列表
  uncheckedList(state, getters) {
    return getters.cartList.filter(item => !item.checked);
  }
};

export default getters;
