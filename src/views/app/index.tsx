import React  from 'react';
import { View } from "@/views/app/style";
import { rootStore, MobxContext } from "@/store";

window.$refPopup = React.createRef();

function Index() {
  return (
    <MobxContext.Provider value={rootStore}>
      <View>fengfeng123</View>
    </MobxContext.Provider>
  );
}

export default Index;
