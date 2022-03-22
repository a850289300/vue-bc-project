import { defineStore } from 'pinia'

export const useStore = defineStore('userInfo', {
  state: () => {
    return { 
      account: '用户'
    }
  },
  actions: {
    setAccount(val: string) {
      this.account = val
    },
  },
})