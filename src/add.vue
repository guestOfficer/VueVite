<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { user } from "./stores/user";
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const serve = user();
const form = reactive({
  name: "",
  password: "",
});
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const { data } = await serve.add(form);
      if (data.msg != "0") return;
      ElMessage.success("注册成功！");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<template>
  <div class="login">
    <!-- <img class="loginBack" src=""> -->
    <!-- <video
      class="video"
      :muted="true"
      :loop="true"
      :autoplay="true"
      width="100%"
      height="100%"
      src="./assets/d51a96a0f6215e5a08e30ad11b35ff44_preview.mp4"
    ></video> -->
    <div class="loginBox">
      <div class="login-title">登陆</div>
      <div class="form">
        <el-form :model="form" :rules="rules" ref="ruleFormRef">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="密码" />
          </el-form-item>
          <el-form-item>
            <div class="loginButton">
              <el-button type="primary" @click="submitForm(ruleFormRef)">
                登陆
              </el-button>
            </div>
            <div class="loginButton" size="mini">
              <el-link type="primary" @click="router.push('/add')"
                >注册一个</el-link
              >
            </div>
          </el-form-item>
        </el-form>
      </div>
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
    width: 500px;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
    transition: box-shadow 0.5s;
    .login-title {
      width: 100%;
      color: #333;
      text-align: center;
      padding: 10px 0px 0px;
    }
    .form {
      padding: 50px 90px;
      .loginButton {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
