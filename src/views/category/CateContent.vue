<template>
  <scroll v-show="isShow" ref="cateScroll">
    <cate-base :baseDate="contentData.baseDate"></cate-base>
    <cate-detail :detailDate="contentData.detailDate"></cate-detail>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CateBase from "components/content/category/CateBase";
import CateDetail from "components/content/category/CateDetail";

import Bus from "common/bus.js";

export default {
  name: "CateContent",
  components: {
    Scroll,
    CateBase,
    CateDetail,
  },
  props: {
    contentData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    isShow() {
      return Object.keys(this.contentData).length > 1;
    },
  },
  mounted() {
    Bus.$on("CateRefresh", () => {
      this.$refs.cateScroll.scroll.refresh();
      this.$refs.cateScroll.scroll.scrollTo(0,0);
    });
  },
};
</script>

<style scoped></style>
