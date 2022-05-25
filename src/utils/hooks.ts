import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Interface from "@/interface/request.interface";
import { postTask3 } from "@/utils/request";
import { MobxContext } from "@/store";

function useTask3<T>(params: any): [any, T | undefined, Function] {
  const [data, triggerData] = useState<T | undefined>();
  const [reset, triggerReset] = useState<number>(0);
  const refError = useRef();

  const resetFetch = useCallback(() => {
    triggerReset(performance.now());
  }, []);

  useEffect(() => {
    postTask3<T>('conf', params)
      .then(res => {
        refError.current = undefined;
        triggerData(res);
      })
      .catch((res) => {
        refError.current = res;
      })
  }, [reset, params])

  return [refError.current, data, resetFetch];
}

function useConf(params: any): [Interface.ConfDoData | undefined, Function] {
  const [err, data, trigger] = useTask3<Interface.ConfDoData>(params);
  if (err) {
    console.error(err);
  }
  return [data, trigger];
}

function useMobx(storeName?: 'store' | 'operate') {
  const rootStore: any = useContext(MobxContext)
  return storeName ? rootStore[storeName] : rootStore;
}

export {
  useConf,
  useMobx
}
