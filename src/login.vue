<script lang="ts" setup>
import { ref, reactive } from "vue";
import { user } from "./stores/user";
import { ElNotification } from "element-plus";
import Cookies from "js-cookie";
const serve = user();
const str = ref("");
const num = ref(0);
const active = ref(1);
const image = reactive([
  {
    id: 1,
    pic: "http://wyz-math.cn/admin/wyz%E8%87%AA%E5%BB%BA/img/image1.png",
  },
  {
    id: 2,
    pic: "http://wyz-math.cn/admin/wyz%E8%87%AA%E5%BB%BA/img/image2.png",
  },
  {
    id: 3,
    pic: "http://wyz-math.cn/admin/wyz%E8%87%AA%E5%BB%BA/img/image3.png",
  },
]);

interface form {
  name: string | boolean;
  password: string | boolean;
  email?: string | boolean;
}
let form: form = reactive({
  name: "",
  password: "",
  email: "",
});

let classForm: form = reactive({
  name: false,
  password: false,
  email: false,
});

const moveSlider = (item: number) => {
  active.value = item;
  num.value = -(item - 1) * 2.2;
};
const className = (item: number) => {
  if (item == active.value) return "image img-" + item + " show";
  else return "image img-" + item + "";
};
const reset = (msg: string) => {
  str.value = msg;
  Object.assign(form, { name: "", password: "", email: "" })
  Object.assign(classForm, { name: false, password: false, email: false })
};
const submitLogin = async () => {
  const { data } = await serve.login(form);
  if (data.msg != 0) return;
  ElNotification.success(data.message);
  Cookies.set("token", data.token);
};
const submitAdd = async () => {
  const { data } = await serve.add(form);
  if (data.msg != 0) return
  ElNotification.success(data.message)
};
</script>
<template>
  <main :class="str">
    <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <form autocomplete="off" class="sign-in-form">
            <div class="logo">
              <img src="http://wyz-math.cn/admin/wyz%E8%87%AA%E5%BB%BA/img/logo.png" alt="easyclass" />
              <h4>easyclass</h4>
            </div>

            <div class="heading">
              <h2>Welcome Back</h2>
              <h6>Not registred yet?</h6>
              <a href="#" class="toggle" @click="reset('sign-up-mode')">Sign up</a>
            </div>

            <div class="actual-form">
              <div class="input-wrap">
                <input type="text" minlength="4" class="input-field" @focus="classForm.name = true"
                  @blur="classForm.name = form.name == '' ? false : true" v-model="form.name"
                  :class="classForm.name ? 'active' : ''" @keyup.enter="submitLogin" />
                <label>Name</label>
              </div>

              <div class="input-wrap">
                <input type="password" minlength="4" @focus="classForm.password = true" @blur="
                  classForm.password = form.password == '' ? false : true
                " v-model="form.password" class="input-field" :class="classForm.password ? 'active' : ''"
                  @keyup.enter="submitLogin" />
                <label>Password</label>
              </div>

              <input type="button" @click="submitLogin" value="Sign In" class="sign-btn" />

              <p class="text">
                Forgotten your password or you login datails?
                <a href="#">Get help</a> signing in
              </p>
            </div>
          </form>

          <form autocomplete="off" class="sign-up-form">
            <div class="logo">
              <img src="http://wyz-math.cn/admin/wyz%E8%87%AA%E5%BB%BA/img/logo.png" alt="easyclass" />
              <h4>easyclass</h4>
            </div>

            <div class="heading">
              <h2>Get Started</h2>
              <h6>Already have an account?</h6>
              <a href="#" class="toggle" @click="reset('')">Sign in</a>
            </div>

            <div class="actual-form">
              <div class="input-wrap">
                <input type="text" minlength="4" v-model="form.name" @focus="classForm.name = true"
                  @blur="classForm.name = form.name == '' ? false : true" class="input-field"
                  :class="classForm.name ? 'active' : ''" @keyup.enter="submitLogin" />
                <label>Name</label>
              </div>

              <div class="input-wrap">
                <input type="email" v-model="form.email" class="input-field" @focus="classForm.email = true"
                  @blur="classForm.email = form.email == '' ? false : true" :class="classForm.email ? 'active' : ''"
                  @keyup.enter="submitLogin" />
                <label>Email</label>
              </div>

              <div class="input-wrap">
                <input type="password" v-model="form.password" minlength="4" class="input-field"
                  @focus="classForm.password = true" @blur="
                    classForm.password = form.password == '' ? false : true
                  " :class="classForm.password ? 'active' : ''" @keyup.enter="submitLogin" />
                <label>Password</label>
              </div>

              <input type="button" @click="submitAdd" value="Sign Up" class="sign-btn" />

              <p class="text">
                By signing up, I agree to the
                <a href="#">Terms of Services</a> and
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </form>
        </div>

        <div class="carousel">
          <div class="images-wrapper">
            <img v-for="item in image" :key="item.id" :src="item.pic" :class="className(item.id)" />
          </div>

          <div class="text-slider">
            <div class="text-wrap">
              <div class="text-group" :style="'transform: translateY(' + num + 'rem)'">
                <h2>Create your own courses</h2>
                <h2>Customize as you like</h2>
                <h2>Invite students to your class</h2>
              </div>
            </div>

            <div class="bullets">
              <span v-for="item in [1, 2, 3]" :key="item" data-value="1" @click="moveSlider(item)"
                :class="active == item ? 'active' : ''"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="less" scoped>
main {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ff8c6b;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  width: 100%;
  max-width: 1020px;
  height: 640px;
  background-color: #fff;
  border-radius: 3.3rem;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.inner-box {
  position: absolute;
  width: calc(100% - 4.1rem);
  height: calc(100% - 4.1rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.forms-wrap {
  position: absolute;
  height: 100%;
  width: 45%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transition: 0.8s ease-in-out;
}

form {
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
}

form.sign-up-form {
  opacity: 0;
  pointer-events: none;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 27px;
  margin-right: 0.3rem;
}

.logo h4 {
  font-size: 1.1rem;
  margin-top: -9px;
  letter-spacing: -0.5px;
  color: #151111;
}

.heading h2 {
  font-size: 2.1rem;
  font-weight: 600;
  color: #151111;
}

.heading h6 {
  color: #bababa;
  font-weight: 400;
  font-size: 0.75rem;
  display: inline;
}

.toggle {
  color: #151111;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  transition: 0.3s;
}

.toggle:hover {
  color: #8371fd;
}

.input-wrap {
  position: relative;
  height: 37px;
  margin-bottom: 2rem;
}

.input-field {
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #bbb;
  padding: 0;
  font-size: 0.95rem;
  color: #151111;
  transition: 0.4s;
}

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.95rem;
  color: #bbb;
  pointer-events: none;
  transition: 0.4s;
}

.input-field.active {
  border-bottom-color: #151111;
}

.input-field.active+label {
  font-size: 0.75rem;
  top: -2px;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: 43px;
  background-color: #151111;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;
}

.sign-btn:hover {
  background-color: #8371fd;
}

.text {
  color: #bbb;
  font-size: 0.7rem;
}

.text a {
  color: #bbb;
  transition: 0.3s;
}

.text a:hover {
  color: #8371fd;
}

main.sign-up-mode form.sign-in-form {
  opacity: 0;
  pointer-events: none;
}

main.sign-up-mode form.sign-up-form {
  opacity: 1;
  pointer-events: all;
}

main.sign-up-mode .forms-wrap {
  left: 55%;
}

main.sign-up-mode .carousel {
  left: 0%;
}

.carousel {
  position: absolute;
  height: 100%;
  width: 55%;
  left: 45%;
  top: 0;
  background-color: #ffe0d2;
  border-radius: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  transition: 0.8s ease-in-out;
}

.images-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.image {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  opacity: 0;
  transition: opacity 0.3s, transform 0.5s;
}

.img-1 {
  transform: translate(0, -50px);
}

.img-2 {
  transform: scale(0.4, 0.5);
}

.img-3 {
  transform: scale(0.3) rotate(-20deg);
}

.image.show {
  opacity: 1;
  transform: none;
}

.text-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text-wrap {
  max-height: 2.2rem;
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.text-group {
  display: flex;
  flex-direction: column;
  text-align: center;
  transform: translateY(0);
  transition: 0.5s;
}

.text-group h2 {
  line-height: 2.2rem;
  font-weight: 600;
  font-size: 1.6rem;
}

.bullets {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bullets span {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #aaa;
  margin: 0 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.bullets span.active {
  width: 1.1rem;
  background-color: #151111;
  border-radius: 1rem;
}

@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }

  .inner-box {
    position: static;
    transform: none;
    width: revert;
    height: revert;
    padding: 2rem;
  }

  .forms-wrap {
    position: revert;
    width: 100%;
    height: auto;
  }

  form {
    max-width: revert;
    padding: 1.5rem 2.5rem 2rem;
    transition: transform 0.8s ease-in-out, opacity 0.45s linear;
  }

  .heading {
    margin: 2rem 0;
  }

  form.sign-up-form {
    transform: translateX(100%);
  }

  main.sign-up-mode form.sign-in-form {
    transform: translateX(-100%);
  }

  main.sign-up-mode form.sign-up-form {
    transform: translateX(0%);
  }

  .carousel {
    position: revert;
    height: auto;
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
  }

  .images-wrapper {
    display: none;
  }

  .text-slider {
    width: 100%;
  }
}

@media (max-width: 530px) {
  main {
    padding: 1rem;
  }

  .box {
    border-radius: 2rem;
  }

  .inner-box {
    padding: 1rem;
  }

  .carousel {
    padding: 1.5rem 1rem;
    border-radius: 1.6rem;
  }

  .text-wrap {
    margin-bottom: 1rem;
  }

  .text-group h2 {
    font-size: 1.2rem;
  }

  form {
    padding: 1rem 2rem 1.5rem;
  }
}
</style>
