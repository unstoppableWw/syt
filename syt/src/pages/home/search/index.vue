<template>
  <div class="search">
    <el-autocomplete @select="goDetail" :trigger-on-focus="false"  clearable class="form" placeholder="请你输入医院的名称" v-model="hosname"   :fetch-suggestions="fetchData"/>
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import {ref} from 'vue';
import { reqHospitalInfo } from '@/api/home';
import type { HospitalInfo,Content } from '@/api/home/type';
import { useRouter } from 'vue-router';
let hosname = ref<string>('')
let $router = useRouter()

let fetchData=async(keyword:string,cb:any) => { 
  let result:HospitalInfo =  await reqHospitalInfo(keyword);
  let showData = result.data.map((item) => { 
    return{
      value:item.hosname,
      hoscode:item.hoscode,
    }
  })
  cb(showData)
 }

let goDetail = (item:any) => { 
  $router.push({path:'/hospital/register',query:{hoscode:item.hoscode}})
  console.log(item)
}

</script>


<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>