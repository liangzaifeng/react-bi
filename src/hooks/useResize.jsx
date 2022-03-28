import { useEffect, useRef } from 'react'

export default function useResize (myChart) {
  const timeId = useRef(null)

  const resizeEcharts = () => {
    clearTimeout(timeId.current)
    timeId.current = setTimeout(() => {
      myChart.current.resize()
    }, 150)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeEcharts)
    return () => {
      window.removeEventListener('resize', resizeEcharts)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
