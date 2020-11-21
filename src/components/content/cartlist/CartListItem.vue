<template>
  <div id="cart-item">
    <!-- 商品选中状态 -->
    <div class="item-selector" @click="changeChecked">
      <check-button :status="isChecked"></check-button>
    </div>
    <!-- 左侧图片 -->
    <div class="item-img">
      <img :src="cartItem.imgURL" alt="商品图片" />
    </div>
    <!-- 右侧基本信息 -->
    <div class="item-info">
      <div class="item-title">{{ cartItem.title }}</div>
      <div class="item-desc">商品描述: {{ cartItem.desc }}</div>
      <!-- 数据、按钮 -->
      <div class="item-data">
        <div class="item-price">¥{{ cartItem.lowNowPrice }}</div>
        <div v-show="!showOtherBtn" class="item-count1" @click="changeBtn">
          x{{ cartItem.count }}
        </div>
        <div v-show="showOtherBtn" class="item-count2">
          <span class="count-btn" @click="reduce">-</span>
          <span class="count-text">{{ cartItem.count }}</span>
          <span class="count-btn" @click="add">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    index:Number,
    cartItem: Object,
  },
  data() {
    return {
      showOtherBtn: false,
    };
  },
  computed: {
    // 根据商品的checked属性，实时切换图标的选中状态
    isChecked() {
      return this.cartItem.checked;
    },
  },
  methods: {
    changeChecked() {
      // 点击按钮，更改对象本身的选中状态
      this.cartItem.checked = !this.cartItem.checked;
      // 提交存储
      this.$store.commit('changeChecked',this.index)
      // console.log(this.cartItem);
    },
    changeBtn() {
      this.showOtherBtn = !this.showOtherBtn;
    },
    // 对商品数量进行增加、减少
    reduce() {
      if (this.cartItem.count < 2) {
        return;
      }
      // this.cartItem.count--;
      this.$store.commit('reduceCount',this.index)
    },
    add() {
      // this.cartItem.count++;
      this.$store.commit('addCount',this.index)
    },
  },
  deactivated(){
    // 显示按钮的切换
    this.showOtherBtn=false;
  }
};
</script>

<style lang="scss" scoped>
#cart-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  // 是否选中
  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 图片
  .item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  }
  // 右侧三行信息
  .item-info {
    flex: 1;
    padding: 5px 10px;
    font-size: 17px;
    color: #333;
    overflow: hidden;
    .item-title,
    .item-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .item-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      line-height: 24px;
      box-sizing: border-box;
      text-align: center;

      .item-price {
        color: orangered;
      }
      .item-count1 {
        padding:0 5px;
        line-height: 24px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      // 制作按钮
      .item-count2 {
        display: flex;
        width: 90px;
        border: 1px solid #ccc;
        border-radius: 3px;
        .count-btn {
          width: 24px;
          height: 24px;
        }
        .count-text {
          flex: 1;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
      }
    }
  }
}
</style>
