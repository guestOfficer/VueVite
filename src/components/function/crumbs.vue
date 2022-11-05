<script setup lang="ts">
import { ref } from "vue";
import { Fold } from "@element-plus/icons-vue";
const props = defineProps({
  isCollapse: Boolean,
});
const emit = defineEmits(["switchState"]);
const switchState = () => {
  emit("switchState");
};
</script>

<template>
  <div>
    <el-icon @click="switchState">
      <Fold
        :style="
          isCollapse
            ? 'transform: rotate(0deg);transition:.3s linear;'
            : 'transform: rotate(-180deg);transition:.3s linear;'
        "
      />
    </el-icon>
  </div>
</template>

<style scoped></style>
