<script lang="ts" setup>
import { ref } from "vue";
import list from "../../router/page";
import { useRouter } from "vue-router";
import { HomeFilled, User, House } from "@element-plus/icons-vue";
const props = defineProps({
  isCollapse: Boolean,
});
</script>
<template>
  <el-menu
    :default-active="useRouter().currentRoute.value.fullPath"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
  >
    <el-menu-item :index="item.path" v-for="item in list" :key="item.name" to>
      <el-icon>
        <!-- <component :is="item.meta.icon" /> -->
        <User />
      </el-icon>
      <template #title>{{ $t(item.meta.title) }}</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu {
  border: 0;
}
</style>
