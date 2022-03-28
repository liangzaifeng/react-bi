import React from 'react'
import { Decoration5, Decoration8, Decoration10 } from '@jiaminghi/data-view-react'
import Tabs from '../Tabs'
import styles from './index.module.less'
export default function Header() {
  const a = '1'
  console.log(a)

  const b = 1
  console.log(b)
  const c = 1
  console.log(c)

  return (
    <div className={styles.header}>
      <div className="top">
        <Decoration8 color={['#6a98ec', '#6a98ec']}
          style={{ width: '20%', height: '50px' }}
        />
        <div className="title-wrap">
          <h1 className="title">DEMO数据大屏</h1>
          <Decoration5 color={['#6a98ec', '#6a98ec']}
            style={{ width: '100%', height: '120px' }}
          />
        </div>
        <Decoration8
          color={['#6a98ec', '#6a98ec']}
          reverse
          style={{ width: '20%', height: '50px' }}
        />
      </div>
      <div className="tabs">
        <Tabs />
      </div>
      <Decoration10 color={['#6a98ec']}
        style={{ width: '100%', height: '5px' }}
      />
    </div>
  )
}
