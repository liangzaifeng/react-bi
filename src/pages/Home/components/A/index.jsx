import useResize from '@hooks/useResize'
import React, { useEffect, useRef } from 'react'
import styles from './index.module.less'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/grid')
require('echarts/lib/chart/line')

export default function A() {
  const refDom = useRef(null)
  const myChart = useRef(null)
  useResize(myChart)
  // const a = true ? 1 : 2

  useEffect(() => {
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
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    }
    window.addEventListener('load', () => {
      myChart.current = echarts.init(refDom.current)
      option && myChart.current.setOption(option)
    })
  }, [refDom])

  return (
    <div
      a="asdfasdfdsfdsdfssd"
      b="ladsfjadalajkflasdfjlsdkfjakfdk"
      className={styles['div-a']}
      ref={refDom}
    >
      A
    </div>
  )
}
