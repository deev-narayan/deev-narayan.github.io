import React from 'react'
import styles from './about.module.css'

export default function AboutPage() {
  return (
    <>
    <div id={styles.contain}>
      <div id={styles.design}>
        <p>About</p>
      </div>
      <div id={styles.circle}>
        <img src="./another.png" alt="selfe"/>
      </div>
    </div>
    </>
  )
}
