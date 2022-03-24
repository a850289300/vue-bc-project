import { PiniaPluginContext } from "pinia";

export interface ExtraOptions {
  enableCaching?: boolean;
  storage?: Storage
}

type Store = PiniaPluginContext['store'];

declare module 'pinia' {
  // 新增options
  export interface DefineStoreOptionsBase<S, Store> {
    extra?: ExtraOptions
  }
}

export const localCache = ({ options, store }:PiniaPluginContext) => {
  const {extra} = options
  if (extra?.enableCaching) { // 是否开启缓存
    const id = store.$id; // 获取当前pinia 的 id
    const storage = extra.storage || localStorage;
    const storageResult = storage.getItem(id)
    if (storageResult) { // 有值
      store.$patch(JSON.parse(storageResult)) // 更新数据
      updateStorage(storage, id, store)
    }

    store.$subscribe(() => { // 监听变化
      updateStorage(storage, id, store)
    })
  }
}

export const updateStorage = (storage:Storage, id: string, store: Store) => {
  storage.setItem(id, JSON.stringify(store.$state))
}