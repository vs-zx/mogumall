<template>
  <div class="icon-selector" :class="{ 'icon-active': isActive }">
    <img src="~/assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive() {
      // console.log('status-----------'+this.status);
      return this.status;
    },
  },
};
</script>

<style scoped>
.icon-selector {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.icon-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>
