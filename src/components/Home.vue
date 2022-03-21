<script setup lang="ts">
import { ref } from 'vue'
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
  <el-row :gutter="12">
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

<style scoped>
.mark-item {
  cursor: pointer;
}
</style>
