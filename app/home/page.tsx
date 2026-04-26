import React from 'react'
import InfoPage from '../_component/info/page'
import NavBar from '../_component/navbar/page'
import style from './home.module.css'

export default function HomeWel() {
  return (
    <>
    <div id={style.data}>
      <InfoPage />
    </div>
    </>
  )
}
