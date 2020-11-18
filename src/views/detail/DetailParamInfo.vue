<template>
  <div class="param-info" v-if="isShow">
    <!-- 商品尺寸表格 -->
    <div class="sizes-title">{{ paramInfo.sizesTitle }}</div>
    <table
      class="info-size"
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <!-- 尺寸的免责声明 -->
    <div class="disclaimer">{{ paramInfo.disclaimer }}</div>

    <!-- 商品详情参数 -->
    <div class="infos-title">{{ paramInfo.infosTitle }}</div>
    <table class="info-other">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="info-other-key" cellpadding="0">{{ item.key }}</td>
        <td class="info-other-value" cellpadding="0">{{ item.value }}</td>
      </tr>
    </table>

    <!-- 商品展示图 -->
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isShow() {
      return Object.keys(this.paramInfo).length !== 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}


.sizes-title,
.infos-title {
  font-weight: bold;
  line-height: 22px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 6px;
}
.info-size {
  width: 100%;
  border-collapse: collapse;
  tr {
    height: 42px;
  }
  td {
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
}
.disclaimer {
  line-height: 16px;
  padding: 5px 0 10px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color:#333;
  font-weight: bold;
}


.info-other {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  tr {
    height: 42px;
    &:nth-child(odd) {
      background: #f5f5f5;
    }
    &:nth-child(even) {
      background: #eee;
    }
  }
  td {
    line-height: 20px;
    letter-spacing: 2px;;
  }
  .info-other-key {
    width: 95px;
    color: #333;
    text-align: center;
  }
  .info-other-value {
    color: #333;
    padding: 5px;
  }
}

.info-img img {
  width: 100%;
}
</style>
