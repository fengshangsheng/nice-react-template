import React, { Suspense}  from 'react';
import { View } from "@/views/app/style";
import { rootStore, MobxContext } from "@/store";
// import OtherComponent from '@/views/component/styleComponents'
const OtherComponent = React.lazy(() => import('@/views/component/styleComponents'));

window.$refPopup = React.createRef();

function Index() {
  return (
    <MobxContext.Provider value={rootStore}>
      <Suspense fallback={'加载中...'}>
        <View>fengfeng123</View>
        <OtherComponent/>
      </Suspense>
    </MobxContext.Provider>
  );
}

export default Index;
