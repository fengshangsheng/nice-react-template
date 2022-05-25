import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Default, Package } from '@/views/component/modal/style'
import { postTask3 } from "@/utils/request";
import IRequest from "@/interface/request.interface";
import { usePages } from "nicetoolfn";


type TDefaultTip = {
  message: string
  title?: string
  btnName?: string
  confirmFn?: Function
  closeFn?: Function
  [key: string]: any
}

function DefaultTip(props: TDefaultTip) {
  const { title, message, btnName, confirmFn, closeFn } = props;
  return <Default>
    <div className="close" onClick={() => {
      closeFn && closeFn(props);
      !closeFn && props.clear()
    }}/>
    <p className='title'>{title || '提示'}</p>
    <div className="disTable">
      <div className="disTableCell" dangerouslySetInnerHTML={({ __html: message })}/>
    </div>
    <div className="btn" onClick={() => {
      confirmFn && confirmFn(props);
      !confirmFn && props.clear()
    }}>{btnName || '确  定'}
    </div>
  </Default>
}

function MyPackage(props: any) {
  const [list, trigger] = useState([]);
  const [pageIdx, pageCount, table, handleChangePage] = usePages<IRequest.JoinAndFinishDataAwards[]>(6, list || []);

  const initPackage = useCallback((pageIdx: number) => {
    postTask3('myPackage', {
      actCode: ``,
      pageId: pageIdx,
      pageSize: 9999
    }).then((res: any) => {
      trigger(res);
    })
  }, [])
  const handleTogglePage = function (index: number) {
    if (index > pageCount || index <= 0) {
      return;
    }
    handleChangePage(index);
  }

  useLayoutEffect(() => {
    initPackage(0);
  }, []);

  return <Package>
    <div className="close" onClick={() => props.clear()}/>
    <p className='title'>我的背包</p>
    <ul>
      <li><span>奖品名称</span><span>获奖时间</span><span>获奖详情</span></li>
      {table.map((item: any, index: number) => {
        return <li key={item.createTime + index}>
          <span>{item.awardName}</span>
          <span>{item.createTime && f2eGame.util.formaDate(item.createTime, 'MM.dd hh:mm')}</span>
          <span>{item.dispenseResult || '已发放'}</span>
        </li>
      })}
      {table.length === 0 && <li className="none">无数据</li>}
    </ul>
    <div className='changePage'>
      <span onClick={() => handleTogglePage(pageIdx - 1)}>上一页</span>
      <span onClick={() => handleTogglePage(pageIdx + 1)}>下一页</span>
    </div>
  </Package>
}


export {
  DefaultTip,
  MyPackage
}
