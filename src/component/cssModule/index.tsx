import React, { useState } from 'react';
import style from '@/component/cssModule/style.module.scss';

function Index() {
  const [count, triggerCount] = useState(0);

  return (
    <div className={style.title}>
      <h1 className={style.title}>{count}</h1>
      <button onClick={() => triggerCount(count + 1)}>+1***</button>
    </div>
  );
}

export default Index;
