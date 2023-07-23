<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">全部</li>
        <li v-for="level in levelArr" :key="level.value" @click="changeLevel(level.value)" :class="{ active: activeFlag == level.value}">{{level.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from "@/api/home/type";

let levelArr = ref<HospitalLevelAndRegionArr>([]);
let activeFlag = ref<string>('');
let $emit = defineEmits(['getLevel'])

onMounted(() => {
  getLevel()
  getRegion()
})

const getLevel = async () => {
  const res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
  if (res.code == 200) {
    levelArr.value = res.data
  }
}

const getRegion = async () => {
  const res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
  if (res.code == 200) {
    levelArr.value = res.data
  }
}


const changeLevel = (level:string)=>{
  activeFlag.value = level;
  $emit('getLevel',level)
}
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;

  h1 {

    font-weight: 900;
    margin: 20px 0;
  }

  .content {
    display: flex;

    .hospital {
      display: flex;

      li {
        margin-right: 10px;

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