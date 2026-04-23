import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div id={style.contain}>
        <div id={style.logo}>
            <img src="./logo.png" alt="" className='h-8 w-8 object-contain'/>
        </div>
        <div id={style.rout}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <button>Resume</button>
        </div>
    </div>
  )
}
