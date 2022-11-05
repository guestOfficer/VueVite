<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
const { messages, locale }: any = useI18n();

const title = ref("汉语");
const selectLanguage = (msg: string, str: string) => {
  title.value = str;
  locale.value = msg;
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
          <el-dropdown-item
            :disabled="title == '汉语'"
            @click="selectLanguage('zh', '汉语')"
            >汉语</el-dropdown-item
          >
          <el-dropdown-item
            :disabled="title == '英语'"
            @click="selectLanguage('en', '英语')"
            >英语</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
