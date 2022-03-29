<template>
  <div class="common-bc-header">
    <div
      class="user-info"
      v-if="account"
    >
      <el-avatar
        :icon="UserFilled"
        :size="36"
      />
      <el-dropdown
        class="user-account"
        @command="userHandle"
      >
        <span class="el-dropdown-link">
          {{account}}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="change">修改密码</el-dropdown-item>
            <el-dropdown-item
              divided
              command="quit"
            >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div
      v-else
      class="user-info"
    >
      <span @click="toLogin">登录</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { userStore } from '@/store/user.ts'
const { userInfo = {} } = userStore()
const { account } = userInfo || {}
function userHandle(val: string | object) {
  if (val === 'change') {
  } else if (val === 'quit') {
    userStore().logOut()
  }
}
function toLogin() {
  userStore().toLogin()
}
</script>
<style lang="less" scoped>
.common-bc-header {
  height: 48px;
  width: 100%;
  padding: 0 10px;
  background: #081b37;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(1, 36, 62, 0.1);
  box-sizing: border-box;
  .user-info {
    position: absolute;
    right: 20px;
    color: #ddd;
    cursor: pointer;
    .user-account {
      margin-left: 8px;
      vertical-align: text-top;
    }
  }
}
</style>
