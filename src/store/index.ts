import { createContext } from "react";
import { configure, makeAutoObservable, } from 'mobx';
import IPublic from "@/interface/public";

configure({ useProxies: "never" })

class Store {
  _rootStore;

  constructor(_rootStore: any) {
    this._rootStore = _rootStore
    makeAutoObservable(this)
  }

  urlParams: IPublic.UrlParams = {
    QD: ['', ''],
    AW: ['', ''],
    pro: '',
    dsfrom: ''
  }

  setUrlParams(data: IPublic.UrlParams) {
    this.urlParams = data;
  }

  // 是否登录
  isLogin: boolean | undefined = undefined

  setLogin(bool: boolean) {
    this.isLogin = bool;
  }
}

class Operate {
  _rootStore;

  constructor(_rootStore: any) {
    this._rootStore = _rootStore
    makeAutoObservable(this)
  }


}

class RootStore {
  store;
  operate;

  constructor() {
    this.store = new Store(this);
    this.operate = new Operate(this);
  }
}

const rootStore = new RootStore();
const MobxContext = createContext(rootStore);

export {
  rootStore,
  MobxContext
};
