import React, { useState } from 'react';
import { View } from '@/component/styleComponents/style';

function Index() {
  const [count, triggerCount] = useState(0);

  return (
    <View>
      <h1>{count}</h1>
      <button onClick={() => triggerCount(count + 1)}>+1***</button>
    </View>
  );
}

export default Index;
