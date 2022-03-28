import React from 'react'
import { Decoration3, BorderBox12 } from '@jiaminghi/data-view-react'
import styles from './index.module.less'

export default function Tabs() {
  return (
    <div className={styles['tabs-wrap']}>
      <div className="left">
        <div className="tab-item active">
          <BorderBox12>模板1</BorderBox12>
        </div>
        <div className="tab-item">
          <BorderBox12>模板2</BorderBox12>
        </div>
        <div className="tab-item">
          <BorderBox12>模板3</BorderBox12>
        </div>
        <div className="tab-item">
          <BorderBox12>模板4</BorderBox12>
        </div>
      </div>
      <div className="right">
        <div className="tab-item">
          <BorderBox12>模板5</BorderBox12>
        </div>
        <div className="tab-item">
          <BorderBox12>模板6</BorderBox12>
        </div>
        <div className="tab-item">
          <BorderBox12>模板7</BorderBox12>
        </div>
        <div className="tab-item">
          <Decoration3 style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  )
}
