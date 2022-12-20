<template>
  <div class="home">
    <div class="title">米奇不妙屋</div>
    <div class="msgList">
      <div
        :class="(index + 1) % 2 == 0 ? 'right' : 'left'"
        v-for="(item, index) in msgList"
        :key="item"
      >
        <img
          class="avatar"
          v-if="(index + 1) % 2 != 0"
          src="./assets/avatar.jpg"
        />
        <span class="message"> {{ item }}</span>

        <img
          class="avatarAi"
          v-if="(index + 1) % 2 == 0"
          src="./assets/avatarAi.jpg"
        />
      </div>
      <div v-if="loading">
        <div class="right">
          <span class="message">
            <img class="loading" src="./assets/loading.webp" alt="">
          </span>
          <img class="avatarAi" src="./assets/avatarAi.jpg" />
        </div>
      </div>
    </div>
    <div class="input">
      <input type="text" v-model="msg" @keyup.enter="send" />
      <img style="padding-right: 5px" src="./assets/send.svg" @click="send" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { openAi } from "./stores/openAi";
const serve = openAi();
const loading = ref(false);
const msg = ref("");
const msgList: string[] = reactive([]);
const send = async () => {
  if (msg.value === "") return;
  loading.value = true;
  let form = {
    prompt: msg.value,
  };
  msgList.push(msg.value);
  msg.value = "";
  const { data } = await serve.openAi(form);
  msgList.push(data);
  loading.value = false;
};
</script>
<style scoped lang="less">
.home {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 10px;
  .title {
    font-size: 26px;
    text-align: center;
  }
  .msgList {
    width: 80%;
    margin: 10px auto;
    padding: 10px;
    .message {
      background: #66ccff;
      color: #fff;
      padding: 10px;
      border-radius: 8px;
      .loading{
        width: 40px;
      }
    }
    .avatar {
      width: 40px;
      height: 40px;
      padding-right: 10px;
    }
    .avatarAi {
      width: 40px;
      height: 40px;
      padding-left: 10px;
    }
    .right {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 10px 0px;
    }
    .left {
      width: 100%;
      text-align: left;
      display: flex;
      margin: 10px 0px;
    }
  }
}
.input {
  width: 80%;
  border-radius: 50px;
  height: 40px;
  border: 1px solid #000;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
