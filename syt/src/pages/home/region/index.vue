<template>
  <div class="region">
    <div class="content">
      <div class="left">
        地区：
      </div>
      <ul>
        <li :class="{ active: RegionFlag == ''}" @click="changeRegion('')">全部</li>
        <li v-for="item in RegionArr" :key="item.value" :class="{active:RegionFlag==item.value}" @click="changeRegion(item.value)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { reqHospitalLevelAndRegion } from "@/api/home";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";

let RegionFlag=ref<string>('')
let RegionArr=ref<HospitalLevelAndRegionArr>([])
let $emit = defineEmits(['getRegion'])

onMounted(() => {
  getRegion();
})

const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "Beijin"
  );
  //存储全部地区的数据
  if (result.code == 200) {
    RegionArr.value = result.data;
  }
};


const changeRegion = (region:string) => { 
  RegionFlag.value= region;
  $emit('getRegion',region)
 }
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;

  .content {
    display: flex;

    .left {
      width: 48px;
    }

    ul {
      width: 90%;
      display: flex;
      flex-wrap: wrap;

      li {
        margin-right: 10px;
        margin-bottom: 10px;

        &.active {
          color: #55a6fe;
        }
      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }

    }
  }
}</style>