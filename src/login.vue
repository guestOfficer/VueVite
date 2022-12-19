<script setup lang="ts">
import { ref } from "vue";
const form = ref({})
</script>

<template>
  <div class="login">
    <!-- <img class="loginBack" src=""> -->
    <video
      class="video"
      :muted="true"
      :loop="true"
      :autoplay="true"
      width="100%"
      height="100%"
      src="./assets/d51a96a0f6215e5a08e30ad11b35ff44_preview.mp4"
    ></video>
    <div class="loginBox">
      <div class="login-title">登陆</div>
      <div class="form"></div>
    </div>
  </div>
</template>
<style scoped lang="less">

.login {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .video {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .loginBox {
    position: relative;
    z-index: 9999;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
    transition: box-shadow 0.5s;
    .login-title {
      width: 100%;
      color: #333;
      text-align: center;
      padding: 10px 0px;
    }
  }
}
</style>
