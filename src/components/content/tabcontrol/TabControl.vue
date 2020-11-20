<template>
  <div class="tab-control" v-if="titles.length">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      @click="changeStyle(index)"
      :class="{ 'tab-control-item-active': index === currentIndex }"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: [],
    },
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  watch:{
    initIndex(val){
      if(this.currentIndex===val){return}
      this.currentIndex=val;
    }
  },
  methods: {
    changeStyle(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    },
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background: #fff;
  box-shadow: 2px 1px 3px 0 rgba(0,0,0,.3);
  z-index: 4;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item span {
  padding: 5px;
}
.tab-control-item-active {
  color: var(--high-text-color);
}
.tab-control-item-active span {
  border-bottom: 3px solid var(--tint-color);
}
</style>