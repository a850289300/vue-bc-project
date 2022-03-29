#### 2022/3/21

- vite 创建项目
- 依赖安装 (element-plus pinia vue-router)

#### 2022/3/22

- 引入 vue-router pinia (官网)
- 配置 vite.config (官网)
- 解决 Cannot find module ... or its corresponding type declarations 报错 （https://blog.csdn.net/lx1996082566/article/details/121595946）

#### 2022/3/23

学习（vue 获取 dom, pinia 基础使用）

- 引入 less
- 登录页面
- 全局声明

#### 2022/3/24

编写 pinia 插件（本地持久化插件）

- 阅读官网 plugins 相关内容 (https://pinia.vuejs.org/core-concepts/plugins.html)
- ts 新增模块时 需要新增相应的声明
  ```js
  declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
  }
  ```

#### 2022/3/29

- 增加头部
- Vue-router 阅读
