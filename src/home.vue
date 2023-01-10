<script setup lang="ts">

</script>
<template>
  <main>
    <div class="box">
      <div class="menu"></div>
      <div class="content"></div>
    </div>
  </main>
</template>

<style lang="less" scoped="scoped">
main {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ff8c6b;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    position: relative;
    width: 100%;
    max-width: 1300px;
    height: 810px;
    background-color: #fff;
    border-radius: 3.3rem;
    box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
    display: flex;
    .menu{
      border-radius: 3.3rem;
      border-end-end-radius: 0;
      border-start-end-radius: 0;
      width: 16%;
      background: red;
    }
    .content{
      border-radius: 3.3rem;
      width: 84%;
      border-start-start-radius: 0;
      border-end-start-radius: 0;
      background: #000;
    }
  }
}
@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
  }
}

@media (max-width: 530px) {
  main {
    padding: 1rem;
  }

  .box {
    border-radius: 2rem;
  }
}
</style>
