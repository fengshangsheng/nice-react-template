import IPublic from "@/interface/public";

async function $get<T>(url: string, dataType: 'script' | 'jsonp', callback?: Function): Promise<T> {
  return new Promise(resolve => {
    $.ajax({
      url,
      dataType,
      data: {},
      success: function (res: any) {
        dataType === 'script' && resolve((callback && callback()));
        dataType === 'jsonp' && resolve(res);
      }
    });
  })
}

async function loadData(url: string, option: any = { data: {}, dataType: 'jsonp' }) {
  return new Promise(async (resolve, reject) => {
    const res = await f2eGame.util.loadData({
      url,
      ...option
    });
    if (res.code === 0 || res.status === 200) {
      return resolve(res.data);
    }
    return reject(res.message);
  })
}

type ITaskType = 'conf' | 'mydj' | 'joinAndFinish' | 'myPackage';

async function postTask3<T>(type: ITaskType, postData: IPublic.KeyVal): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const res = await f2eGame.port.task3[type](postData);
    if (res.code === 0 || res.status === 200) {
      return resolve(res.data);
    }
    return reject(res);
  })
}


export {
  postTask3,
  loadData,
  $get
}
