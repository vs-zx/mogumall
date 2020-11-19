<template>
  <div class="toast" v-show="isShow" ref="toast">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      msg: "",
      isShow: false,
    };
  },
  methods: {
    show(msg, showtime = 1000) {
      this.msg = msg;
      this.isShow = true;
      setTimeout(() => {
        this.msg = "";
        this.isShow = false;
      }, showtime);
    },
  },
};
</script>

<style scoped>
.toast {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 8px 16px;
  color: #fff;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  z-index: 12;
  animation-name: animate;
  animation-duration: 1s;
}

@keyframes animate {
  0% {
    transform: translate(-50%, 0) scale(0.6);
    opacity: 0.5;
  }
  45%,100% {
    transform: translate(-50%, 0) scale(1);
    opacity: 1;
  }
}
</style>>