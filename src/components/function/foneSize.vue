<script setup lang="ts">
import { ref } from "vue";
const title = ref("默认");
const emit = defineEmits(["selectSize"]);
const selectSize = (size: string, msg: string) => {
  title.value = msg
  emit("selectSize", size);
};
</script>

<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ title }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="selectSize('small', '很小')"
            >很小</el-dropdown-item
          >
          <el-dropdown-item @click="selectSize('default', '默认')"
            >默认</el-dropdown-item
          >
          <el-dropdown-item @click="selectSize('large', '很大')"
            >很大</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped></style>
