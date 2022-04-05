import React, { useEffect, useState } from 'react'
import A from './components/A'
import B from './components/B'
import {
  BorderBox11,
  BorderBox1,
  BorderBox13,
  BorderBox12,
  BorderBox10,
  BorderBox9,
  BorderBox8,
  BorderBox3
} from '@jiaminghi/data-view-react'

import styles from './index.module.less'
export default function Home() {
  const [idData, setIdData] = useState({ id: 1 })
  const [pageData, setPageData] = useState({ page: 1 })
  useEffect(() => {
    console.log('我修改了', 'id: ', idData.id, 'page: ', pageData.page)
  }, [idData, pageData])
  return (
    <>
      <div>
        <button onClick={() => setIdData({ id: idData.id + 1 })}>+1</button>
      </div>
      <div>
        <button onClick={() => setIdData({ id: idData.id - 1 })}>-1</button>
      </div>
      <div>
        <button
          onClick={() => {
            setPageData({ page: pageData.page + 1 })
            setIdData({ id: idData.id + 1 })
          }}
        >
          修改分页数据
        </button>
      </div>
      <button>
        分页pageData: {pageData.page}
      </button>
      <div style={{ background: '#fff' }}>idData: {idData.id}</div>
      <div className={styles.main}>
        <ul className={styles.left}>
          <li className={styles.content}>
            <BorderBox11 title="标题">
              <div className={styles.div1}>
                {/* 1111 */}
                <A key="1" />
              </div>
            </BorderBox11>
          </li>
          <li className={styles.content}>
            <BorderBox12 title="标题">
              <B key="2" />
            </BorderBox12>
          </li>
        </ul>
        <ul className={styles.left}>
          <li className={styles.content}>
            <BorderBox13 title="标题">
              <div className={styles.div1}>
                {/* 1111 */}
                <A key="3" />
              </div>
            </BorderBox13>
          </li>
          <li className={styles.content}>
            <BorderBox3 title="标题">
              <B key="4" />
            </BorderBox3>
          </li>
        </ul>
        <ul className={styles.left}>
          <li className={styles.content}>
            <BorderBox10 title="标题">
              <div className={styles.div1}>
                {/* 1111 */}
                <A key="5" />
              </div>
            </BorderBox10>
          </li>
          <li className={styles.content}>
            <BorderBox1 title="标题">
              <B key="6" />
            </BorderBox1>
          </li>
        </ul>
        <ul className={styles.left}>
          <li className={styles.content}>
            <BorderBox9 title="标题">
              <div className={styles.div1}>
                {/* 1111 */}
                <A key="7" />
              </div>
            </BorderBox9>
          </li>
          <li className={styles.content}>
            <BorderBox8 title="标题">
              <B key="8" />
            </BorderBox8>
          </li>
        </ul>
      </div>
    </>
  )
}
