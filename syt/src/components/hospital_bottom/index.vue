<template>
  <div class="bottom">
    <div class="content">
      <div class="left"> 
        京IPC备 XXXXXX号
        电话挂号 XXX-XXXX
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.bottom {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      font-size: 14px;
      color: 106, 113, 115;
    }
    .right{
      font-size: 14px;
      color: 58, 60, 64;
      span{
        margin-left: 10px;
      }
      
    }

  }
}
</style>