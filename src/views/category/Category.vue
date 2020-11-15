<template>
  <div id="category">
    <nav-bar class="category-nav">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Category",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.category-nav {
  background: var(--background-color);
}
</style>