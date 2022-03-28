import React from 'react'
import A from './components/A'
import B from './components/B'
import { BorderBox11, BorderBox1, BorderBox13, BorderBox12, BorderBox10, BorderBox9, BorderBox8, BorderBox3 } from '@jiaminghi/data-view-react'

import styles from './index.module.less'
export default function index () {
  return (
    <div className={styles.main}>
      <ul className={styles.left}>
        <li className={styles.content}>
          <BorderBox11 title="标题">
            <div className={styles.div1}>
              {/* 1111 */}
              <A key="1"/>
            </div>
          </BorderBox11>
        </li>
        <li className={styles.content}>
          <BorderBox12 title="标题">
            <B key="2" />
          </BorderBox12>
        </li>
      </ul> <ul className={styles.left}>
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
      </ul> <ul className={styles.left}>
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
      </ul> <ul className={styles.left}>
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
            <B key="8"/>
          </BorderBox8>
        </li>
      </ul>
    </div>
  )
}
