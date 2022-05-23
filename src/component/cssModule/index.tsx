import React, { useState } from 'react';
import style from '@/component/cssModule/style.module.scss';

// function Index() {
//   const [count, triggerCount] = useState(0);
//
//   return (
//     <div className={style.title}>
//       <h1 className={style.title}>{count}</h1>
//       <button onClick={() => triggerCount(count + 1)}>+1***</button>
//     </div>
//   );
// }

type IProps = {}
type IState = {
  count: number
}

class Index extends React.PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(props: IProps, state: IState) {
    return null
  }

  getSnapshotBeforeUpdate(proProps: IProps, preState: IState) {
    return ''
  }

  componentDidUpdate(preProps: IProps, preState: IState, snapshot: string) {
  }

  componentDidMount() {
  }

  render() {
    const { count } = this.state

    return <div className={style.title}>
      <h1 onClick={() => {
        this.setState({ count: count + 1 })
      }}>fengfeng123</h1>
      <p>{count}</p>
    </div>
  }

}

export default Index;
