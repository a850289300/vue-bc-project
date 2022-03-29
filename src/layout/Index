<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-layout-header">
          <Header></Header>
      </el-header>
      <el-container>
        <el-aside class="common-layout-aside"></el-aside>
        <el-main class="common-layout-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/common/Header.vue'

</script>

<style lang="less" scoped>
.common-layout {
   height: 100%;
   background: rgba(1, 36, 62, 0.05);
  .common-layout-header {
    height: auto;
    padding: 0;
  }
  .common-layout-aside {
    width: auto;
  }
  .common-layout-main {
    padding: 0;
  }
}
</style>
