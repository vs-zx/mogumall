<template>
  <div class="comment-info">
    <!-- 头部 -->
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <!-- 评论展示 -->
    <div v-if="isShow">
      <!-- 用户信息 -->
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="avatar" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <!-- 评论详情 -->
      <div class="info-detail">
        <!-- 文本 -->
        <p class="info-text">{{ commentInfo.content }}</p>
        <!-- 评论日期，商品参数 -->
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <!-- 评论图片，如果有的话 -->
        <div class="info-imgs" v-if="commentInfo.images">
          <img
            v-for="(item, index) in commentInfo.images"
            :src="item"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShow() {
      return Object.keys(this.commentInfo).length !== 0;
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000 + 2 * 365 * 24 * 3600 * 1000);
      return formatDate(date);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 12px;
  color: #666;
  border-bottom: 5px solid #f2f5f8;
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  .header-title {
    font-weight: bold;
  }
  .header-more {
    position: relative;
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 30px;
    &::before {
      content: "";
      position: absolute;
      left: 35px;
      top: 18px;
      border: 7px solid transparent;
      border-left: 7px solid #666;
    }
    &::after {
      content: "";
      position: absolute;
      left: 35px;
      top: 20px;
      border: 5px solid transparent;
      border-left: 5px solid #fff;
    }
  }
}

.info-user {
  padding: 10px 0 5px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
}

.info-detail {
  padding: 0 5px 15px;
  .info-text {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
    letter-spacing: 1px;
  }
  .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    .date {
      margin-right: 8px;
    }
  }
  .info-imgs {
    margin-top: 10px;
    img {
      width: 70px;
      height: 70px;
      margin-right: 5px;
    }
  }
}
</style>
