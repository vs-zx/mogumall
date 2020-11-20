<template>
  <scroll v-show="isShow" ref="cateScroll" @scrolling="cateScrlling">
    <tab-base :baseDate="contentData.baseDate"></tab-base>
    <tab-detail :detailDate="contentData.detailDate"></tab-detail>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import TabBase from "components/content/category/TabBase";
import TabDetail from "components/content/category/TabDetail";

import Bus from "common/bus.js";

export default {
  name: "CateContent",
  components: {
    Scroll,
    TabBase,
    TabDetail,
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
  methods: {
    cateScrlling() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$refs.cateScroll.scroll.refresh();
        this.timer = null;
      }, 1000);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.cateScroll.scroll.refresh();
    }, 500);
    Bus.$on("CateRefresh", () => {
      this.$refs.cateScroll.scroll.refresh();
      this.$refs.cateScroll.scroll.scrollTo(0,0);
    });
  },
};
</script>

<style scoped></style>
