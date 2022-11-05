<script setup lang="ts">
import { ref, onMounted } from "vue";
//引入全屏组件
import screenfull from "screenfull";
import { FullScreen } from "@element-plus/icons-vue";
const full = ref(true);
const switchScreen = () => {
  full.value = !full.value;
  screenfull.toggle();
};
onMounted(() => {
  screenfull.on("change", () => {
    full.value = !screenfull.isFullscreen;
  });
});
</script>

<template>
  <div>
    <el-icon @click="switchScreen" v-if="full">
      <FullScreen />
    </el-icon>
  </div>
</template>

<style scoped></style>
