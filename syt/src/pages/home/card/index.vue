<template>
  <div>
    <el-card class="box-card" shadow="hover" @click="goDetail">
      <div class="content">
        <div class="left">
          <div class="hosname">
            {{hospitalInfo.hosname}}
          </div>
          <div class="tip">
            <div class="level">
              <svg t="1689046688353" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2309" width="16" height="16">
                <path
                  d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                  p-id="2310"></path>
              </svg>
              {{hospitalInfo.param.hostypeString}}
            </div>
            <div class="time">
              <svg t="1689046754191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4322" width="16" height="16">
                <path
                  d="M511.7 114.2c53.8 0 105.9 10.5 154.9 31.3 47.4 20 90 48.7 126.5 85.3 36.6 36.6 65.3 79.1 85.3 126.5 20.7 49 31.3 101.2 31.3 154.9s-10.5 105.9-31.3 154.9c-20 47.4-48.7 90-85.3 126.5-36.6 36.6-79.1 65.3-126.5 85.3-49 20.7-101.2 31.3-154.9 31.3S405.9 899.7 356.8 879c-47.4-20-90-48.7-126.5-85.3-36.6-36.6-65.3-79.1-85.3-126.5-20.7-49-31.3-101.2-31.3-154.9s10.5-105.9 31.3-154.9c20-47.4 48.7-90 85.3-126.5 36.6-36.6 79.1-65.3 126.5-85.3 49.1-20.9 101.2-31.4 154.9-31.4m0-50c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.5-448-448-448z"
                  fill="#999999" p-id="4323"></path>
                <path d="M515 538c-16.6 0-30-13.4-30-30V312c0-16.6 13.4-30 30-30s30 13.4 30 30v196c0 16.6-13.4 30-30 30z"
                  fill="#999999" p-id="4324"></path>
                <path
                  d="M679.5 714.5L492.3 527.4c-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0l187.1 187.1c9.8 9.8 9.8 25.6 0 35.4-9.7 9.8-25.6 9.8-35.3 0z"
                  fill="#999999" p-id="4325"></path>
              </svg>
              每天：{{hospitalInfo.bookingRule.releaseTime}}-{{hospitalInfo.bookingRule.quitTime}}
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
let $router = useRouter()
let props = defineProps(['hospitalInfo'])

let goDetail = () => { 
  $router.push({path:'/hospital/register',query:{hoscode:props.hospitalInfo.hoscode}})
 }
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;

  .right {
    img {
      width: 50px;
      height: 50px;
    }

  }

  .left {
    width: 60%;

    .tip {
      color: #7f7f7f;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      
      .level,.time{
        display: flex;
        align-items: center;
      }

      svg{
        margin-right: 5px;
      }

    }

  }
}</style>