<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/user'
const store = userStore()
const { account } = store.getUserInfo || {}
const list = [
  {
    name: '音频',
    key: 'audio'
  },
  {
    name: '文本',
    key: 'txt'
  },
  {
    name: 'Ocr',
    key: 'ocr'
  },
]
</script>

<template>
  <el-row
    :gutter="12"
    class="home-page"
  >
    <el-col
      :span="24 / list.length"
      v-for="item in list"
      class="mark-item"
      :key='item.key'
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
