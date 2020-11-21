const mutations = {
  // 为购物车添加商品
  addCart(state, info) {
    // console.log(info);
    // 1.查看商品是否已经存在    已经存在，就返回存在list中的它；不存在就是undefined
    const oldInfo = state.cartList.find(item => item.iid === info.iid);

    // 2.1  存在，商品数 +1 (本地内存同步更改)
    if (oldInfo) {
      oldInfo.count++;
      localStorage.setItem("cList", JSON.stringify(state.cartList));
    } else {
      // 2.2   不存在，为传过来的对象添加选中状态；然后添加到 cartList。
      info.checked = true;
      state.cartList.push(info);
      localStorage.setItem("cList", JSON.stringify(state.cartList));
    }
  },
  // 减少商品数目
  reduceCount(state, idx) {
    state.cartList[idx].count -= 1;
    localStorage.setItem("cList", JSON.stringify(state.cartList));
  },
  // 增加商品数目
  addCount(state, idx) {
    state.cartList[idx].count += 1;
    localStorage.setItem("cList", JSON.stringify(state.cartList));
  },
  // 切换选中状态
  changeChecked(state){
    localStorage.setItem("cList", JSON.stringify(state.cartList));
  },
  // 购物车支付操作    (本地内存同步更改)
  payCart(state, p) {
    console.log("------------mutations");
    // 1 存储已购买(选中)商品
    state.buyList.push(...p.a);
    localStorage.setItem("bList", JSON.stringify(state.buyList));
    // 2 将剩余商品作为总商品
    state.cartList = p.b;
    localStorage.setItem("cList", JSON.stringify(state.cartList));
  },
  clearCart(state){
    state.cartList=[];
    localStorage.removeItem("cList");
  }
};

export default mutations;
