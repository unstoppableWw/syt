<template>
  <div class="container">
    <HospitalTop/>
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom/>
    <Login/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  align-items:center;
  
  .content{
    width: 1200px;
    margin-top: 70px;
  }
}
</style>