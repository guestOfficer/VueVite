<script setup lang="ts">
import { ref } from "vue";
import menuList from "./components/navigation/menuList.vue";
import crumbs from "./components/function/crumbs.vue";
import fullScreen from "./components/function/fullScreen.vue";
import foneSize from "./components/function/foneSize.vue";
import languageSelector from "./components/function/languageSelector.vue";
import avatar from "./components/function/avatar.vue"
import "swiper/css";
import "swiper/css/navigation";
const isCollapse = ref(false);
let fontSize = ref("default");
const switchState = () => {
  isCollapse.value = !isCollapse.value;
};
const selectSize = (size: string) => {
  fontSize.value = size;
};
</script>

<template>
  <el-config-provider :size="fontSize">
    <div class="common-layout" :class="fontSize">
      <el-container>
        <el-aside width="auto">
          <menuList :isCollapse="isCollapse" />
        </el-aside>
        <el-container>
          <el-header>
            <!-- 收起侧边栏或者打开 -->
            <crumbs :isCollapse="isCollapse" @switchState="switchState" />
            <div class="header-right">
              <!-- 全屏 -->
              <fullScreen />
              <!-- 字体大小 -->
              <foneSize @selectSize="selectSize" />
              <!-- 国际化 -->
              <languageSelector />
              <!-- 头像 -->
              <avatar />
            </div>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped>
.common-layout {
  width: 100%;
  height: 100vh;
}
.el-container {
  height: 100%;
}
.el-aside {
background: linear-gradient(to bottom, #ff9569 0%, #e92758 100%);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header-right div {
  margin-left: 20px;
}
</style>
