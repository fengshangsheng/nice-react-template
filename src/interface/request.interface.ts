// res
namespace Interface {
  export interface Res {
    status: number
    message: string
    data: any
  }

  export interface Mydj extends Res {
    data: MydjData
  }

  export interface ConfDo extends Res {
    data: ConfDoData
  }

  export interface JoinAndFinish extends Res {
    data: JoinAndFinishData
  }

  export interface MyPackage extends Res {
    pageCount: number
    pageId: number
    pageSize: number
    totalCount: number
    data: JoinAndFinishData[]
  }
}
// mydj.do
namespace Interface {
  export class MydjData {
    total: number = 0
    remain: number = 0
  }
}
// conf.do
namespace Interface {
  export class ConfDoData {
    actId: number = 0
    beginTime: number = 0
    endTime: number = 0
    cycleFromTime: number = 0
    serverTime: number = 0
    userProp: string = ''
    entrys: ConfDoEntrys[] = []
    awardInfo: object = {}
    attrs: object = {}
    url: string = ''
    anti: string = ''
    hasYyuid: boolean | '' = ''
  }

  export interface ConfDoEntrys {
    gs: {
      gameId: string,
      serverId: string
    },
    upgs: {
      gameId: string,
      serverId: string
    },
    tasks: ConfDoEntrysTasks[],
    entrys: string
  }

  export class ConfDoEntrysTasks {
    id: number = 0
    name: string = ''
    showName: string = ''
    taskDesc: string = ''
    awardName: string = ''
    taskStatus: 0 | 1 | 100 = 0
    beginTime: number = 0
  }
}
// joinAndFinish.do
namespace Interface {
  export class JoinAndFinishData {
    awards: JoinAndFinishDataAwards[] = []
    code: null = null
    completed: boolean | '' = ''
    info: string = ''
  }

  export class JoinAndFinishDataAwards {
    actId: number = 0
    serialId: string = ''
    awardId: number = 0
    awardName: string = ''
    awardType: number = 0
    awardAmount: number = 0
    status: number = 0
    dispenseResult: string = ''
    createTime: number = 0
    prizeId: string = ''
  }
}
// myPackage
namespace Interface {
  export class Pages {
    constructor(
      public pageId: number = 1,
      public pageSize: number = 5,
      public pageCount: number = 1,
      public list: JoinAndFinishDataAwards[] = []
    ) {}
  }
}

export default Interface;
