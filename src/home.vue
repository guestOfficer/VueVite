<script setup lang="ts">

</script>
<template>
  <main>
    <div class="box">
      <div class="menu">
        <div class="userInfo">
          <div class="picture">
            <img src="./assets/avatar.jpg">
          </div>
          <div class="info">
            <div>客官</div>
            <div>用户地址</div>
          </div>
        </div>
      </div>
      <div class="content">

      </div>
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


    .menu {
      width: 16%;
      box-shadow: 1px 0px 40px -30px rgba(0, 0, 0, 1);
      padding: 2rem 0px 1rem;
      .userInfo{
          width: 80%;
          margin: auto;
          display: flex;
          align-items: center;
          .picture{
            width:3.5rem;
            height: 3.5rem;
            margin-right: 2rem;
            img{
              border-radius: 50%;
              box-shadow: 5px 8px 5px rgb(245, 217, 209);
            }
          }
          .info{
            font-size: 14px;
            // line-height: 1.3rem;
          }
      }
    }

    .content {
      width: 84%;
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  }
}

@media (max-width: 850px) {
  main {
    .box {
      height: auto;
      max-width: 610px;
      height: 810px;
      overflow: hidden;
      display: block;
      transition: transform 0.8s ease-in-out, opacity 0.45s linear;

      .menu {
        width: 100%;
        height: 10%;
        border-radius: 3.3rem;
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      .content {
        width: 100%;
        border-radius: 3.3rem;
        border-start-start-radius: 0;
        border-start-end-radius: 0;
        height: 90%;
      }
    }
  }
}

@media (max-width: 530px) {
  main {
    padding: 1rem;

    .box {
      border-radius: 2rem;

      .menu {
        width: 100%;
        height: 10%;
        border-radius: 2rem;
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      .content {
        width: 100%;
        border-radius: 2rem;
        border-start-start-radius: 0;
        border-start-end-radius: 0;
        height: 90%;
      }
    }
  }
}
</style>
