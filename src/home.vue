<script setup lang="ts">

</script>
<template>
  <div class="box">
    <img src="./assets/view.png" alt="">
  </div>
</template>

<style lang="less" scoped="scoped">
/* 
直接使用 vw 和 vh 函数，将像素值传进去，得到的就是具体的 vw vh单位		 
*/
.box {
  overflow: hidden;
  .px2vw(width, 1920);
  .px2vh(height, 1080);
  .px2font(16);
  background-color: black;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
