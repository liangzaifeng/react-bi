import React, { useEffect, useRef } from 'react'
import styles from './index.module.less'
import * as echarts from 'echarts'
export default function B () {
  const refDom = useRef(null)

  useEffect(() => {
    window.addEventListener('load', () => {
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      const myChart = echarts.init(refDom.current)
      option && myChart.setOption(option)
    })
  }, [refDom])
  return (
    <div className={styles['div-a']}
      ref={refDom}
    >
      A
    </div>
  )
}
