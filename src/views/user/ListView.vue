<template>
  <div id="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="info">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .list-item {
  height: 44px;
  line-height: 44px;
  margin-left: 40px;
  padding-left: 5px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

#list .list-item:last-of-type .info {
  border-bottom: none;
}
</style>
