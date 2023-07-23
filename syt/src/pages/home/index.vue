<template>
  <div>
    <!-- 轮播图 -->
    <Carousel />
    <!-- 搜索医院 -->
    <Search />
    <!-- 底部展示医院结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级 -->
        <Level @getLevel="getLevel"/>
        <!-- 地区 -->
        <Region @getRegion="getRegion"/>
        <!-- 展示医院 -->
        <div class="hospital" v-if="hasHospitalArr.length">
          <Card v-for="(item, index) in hasHospitalArr" :key="index" class="item" :hospitalInfo="item" />
          <!-- 分页器 -->

        </div>
        <el-empty v-else description="暂无数据"/>

        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            :background="true" layout="prev, pager, next, jumper, -> ,sizes,total" :total="total"
            @current-change="currentChange" @size-change="sizeChange" />
      </el-col>
      <el-col :span="4">
        <Tip/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { reqHospital } from "@/api/home";

import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tip from './tip/index.vue'

import type { Content, HospitalResponseData } from '@/api/home/type'

// 分页器页码
onMounted(() => {
  getHospitalInfo();
})

//分页器页码发生变化时候回调
const currentChange = () => {
  getHospitalInfo();
};
//分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  //当前页码归第一页
  pageNo.value = 1;
  //再次发请求获取医院的数据
  getHospitalInfo();
};
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)
let hasHospitalArr = ref<Content>([])
let total = ref<number>(0)

let hostype = ref<string>('')
let districtCode = ref<string>('')


const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value)
  if (result.code == 200) {
    hasHospitalArr.value = result.data.content
    total.value = result.data.totalElements
  }
}


const getLevel = (level: string) => {
  console.log(level)
  //收集参数:等级参数
  hostype.value = level;
  //再次发请求
  getHospitalInfo();
};

const getRegion = (region: string) => {
  console.log(region)
  //收集参数:等级参数
  districtCode.value = region;
  //再次发请求
  getHospitalInfo();
};

</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>