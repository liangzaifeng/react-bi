import React from 'react'
import Header from '../components/Header'
import Home from '@/pages/Home'
import styles from './index.module.less'
export default function Layout () {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Home />
      </div>
    </div>
  )
}
