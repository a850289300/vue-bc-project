import { defineStore } from 'pinia'
import { LoginParams, UserInfo } from '../api/model/userModel'
import router from '@/router/index';

interface UserState {
  userInfo: Nullable<UserInfo>
}
export const userStore = defineStore('userInfo', {
  state: (): UserState => {
    return { 
      userInfo: null
    }
  },
  getters: {
    getUserInfo():UserInfo | null {
      return this.userInfo
    }
  },
  actions: {
    setUserInfo(val: UserInfo | null) {
      this.userInfo = val
    },
    login(params: LoginParams) {
      this.setUserInfo(params)
      router.replace('/')
    }
  },
})