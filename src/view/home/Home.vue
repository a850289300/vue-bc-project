<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/user'
const store = userStore()
const { account } = store.getUserInfo || {}
const list = [
  {
    name: '音频',
  },
  {
    name: '文本',
  },
  {
    name: 'Ocr',
  },
]
</script>

<template>
  <span style="display:block;margin: 0 auto;text-align:center;">当前用户: <span>{{account}}</span></span>
  <el-row
    :gutter="12"
    class="home-page"
  >
    <el-col
      :span="24 / list.length"
      v-for="item in list"
      class="mark-item"
    >
      <el-card shadow="hover">
        {{item.name}}
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.home-page {
  margin: 0 !important;
  padding: 20px;
  .mark-item {
    cursor: pointer;
  }
}
</style>
