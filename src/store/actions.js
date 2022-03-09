import {
  ADD_TO_CART, //定义了修改mutation的名字，作用就是降低耦合度，以后要修改方法名字的时候直接修改
  ADD_TO_COUNTER
} from "./constant";

export default {
  // 加入购物车
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      //1.查找之前数组中是否含有该商品
      let product = state.cartList.find(item => item.iid === payload.iid);

      //2. 判断product,这里涉及深拷贝与浅拷贝
      if (product) {
        commit(ADD_TO_COUNTER, product);
        resolve("成功添加购物车num+1");
      } else {
        payload.num = 1;
        payload.isSelected = false;
        commit(ADD_TO_CART, payload);
        resolve("成功添加购物车");
      }
    });
  }
};
