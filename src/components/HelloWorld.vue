<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../stores/index";
defineProps<{ msg: string }>();

const count = ref(0);
const storeo = useStore();
const handleClick = ()=>{
  storeo.happlyBirthday()
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>{{ storeo.name }}</p>
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="handleClick">{{ storeo.name }} 年纪 {{ storeo.age }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
