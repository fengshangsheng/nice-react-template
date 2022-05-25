import React from 'react';
import IPublic from '@/interface/public'
import { rootStore } from "@/store";
import { DefaultTip } from "@/views/component/modal";

function login() {
  f2eGame.port.udb.login({
    url: (window.location.href).split('#')[0],
    type: "YYC",
    tabIndex: 0,
    beta: true,
  })
}

function logout() {
  const bool = confirm("确认退出登录?");
  if (bool) {
    f2eGame.port.udb.logout();
  }
}

function verifyLogin(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    f2eGame.port.udb.isLogin().then((res: boolean) => {
      resolve(res);
    })
  })
}

function joinAndFinishCatch(res: any, option?: [string, Function, Function]) {
  const [btnName, confirmFn, closeFn] = option || [];
  const data = {
    message: res.message,
    btnName, confirmFn, closeFn
  }
  $refPopup.current.open(DefaultTip.bind(null, data));
}

// 获取渠道，属性
function getUrlParams(): IPublic.UrlParams {
  let codeString = f2eGame.util.getQueryString('code');
  let QD_VALUE = Object.keys(CONFIG.QD)[0];
  let AW_VALUE = Object.keys(CONFIG.AW)[0];

  if (codeString && codeString.indexOf('IV') >= 0) {
    QD_VALUE = codeString.split('IV')[0];
    AW_VALUE = codeString.split('IV')[1];
  }

  return {
    QD: [QD_VALUE || '', CONFIG.QD[QD_VALUE] || ''],
    AW: [AW_VALUE || '', CONFIG.AW[AW_VALUE] || ''],
    pro: f2eGame.util.getQueryString('pro'),
    dsfrom: f2eGame.util.getQueryString('dsfrom')
  };
}

// 开始游戏
function playGame(gameId: string, serverId: number, index: number, isStat: boolean = true) {
  const [QD, QD_DESC] = rootStore.store.urlParams.QD;
  const [AW, AW_DESC] = rootStore.store.urlParams.AW;

  let eid = '';
  let eid_desc = '';

  if (isStat) {
    eid = `${QD}/YYCAR/${AW}/jryx${index + 1}`;//上报来源
    eid_desc = `${QD_DESC}/豪车之星/${AW_DESC}/进入游戏${index + 1}`;//上报来源描述
  }

  f2eGame.port.statpid.gameStat({
    gameId,
    serverId,
    eid,
    eid_desc
  });
}

// 登录埋点
function loginStat(): void {
  const {
    QD: [QD, QD_DESC],
    AW: [AW, AW_DESC],
    pro
  } = rootStore.store.urlParams;

  const eid = `login/${QD}/YYCAR/${AW}`;
  const eid_desc = `登录/${QD_DESC}/豪车之星/${AW_DESC}`;

  f2eGame.port.statpid.loginStat({
    eid,// 上报eid
    eid_desc,// 上报eid描述
    pro, // 产品名称
  });
}

// 点击埋点
function statClick(eid: string, eidDesc: string): void {
  const {
    QD: [QD, QD_DESC],
    AW: [AW, AW_DESC],
  } = rootStore.store.urlParams;

  f2eGame.port.statpid.clickStat({
    eid: `click/${QD}/YYCAR/${AW}/${eid}`,
    eid_desc: `点击/${QD_DESC}/豪车之星/${AW_DESC}/${eidDesc}`,
  });
}


export {
  login,
  logout,
  verifyLogin,
  joinAndFinishCatch,
  playGame,
  getUrlParams,
  loginStat,
  statClick
}
