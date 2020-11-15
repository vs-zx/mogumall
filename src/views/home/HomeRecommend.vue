<template>
  <div class="home-recommend" v-if="recommends.length">
    <div class="recommend-item" v-for="item of recommends" :key="item.sort">
      <a :href="item.link" target="_black" class="recommend-link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.home-recommend {
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom:8px solid #eee;
}

.recommend-item {
  flex: 1;
  .recommend-link {
    display: block;
    padding:10px 10px 20px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      margin-bottom:5px;
    }
  }
}
</style>