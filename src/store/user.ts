import { defineStore } from 'pinia'
import { LoginParams, UserInfo } from '../api/model/userModel'
import router from '@/router/index';

interface UserState {
  userInfo: Nullable<UserInfo>
}
export const userStore = defineStore('userInfo', {
  state: (): UserState => {
    return { 
      userInfo: {
        account: '',
        password: ''
      }
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
    },
    logOut() {
      this.setUserInfo(null);
      router.replace('/login')
    },
    toLogin() {
      router.replace('/login')
    }
  },
  extra: {
    enableCaching: true,
    storage: localStorage
  }
})