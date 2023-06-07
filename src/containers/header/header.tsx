import arrowImg from '@assets/arrow.svg'
import styles from './header.module.scss'

import * as React from 'react'

import data from '@api/data.json'

import type { HeaderChildrenProps } from '@types'
import { Hamburger } from '@components'
import Image from 'next/image'

const HeaderChildren = (props: HeaderChildrenProps) => {
  const { options } = props

  if (Array.isArray(options) && options.length > 0) {
    return (
      <ul className={styles.children}>
        {options.map(child => (
          <a key={child.title} className={styles.childLink}>
            {child.title}
          </a>
        ))}
      </ul>
    )
  }

  return null
}

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <span className={styles.logo}>Tu PruTec</span>
        <button className={styles.button}>
          <span className={styles.text}>Nombre de usuario</span>
          <Image className={styles.arrow} src={arrowImg} alt="▼" />
        </button>
      </div>
      <Hamburger />
      <nav id="menu" className={`${styles.menu} menu`}>
        <ul className={styles.list}>
          {data.map(parent => (
            <li key={parent.title} className={styles.parent}>
              {Array.isArray(parent.children) && parent.children.length > 0 ? (
                <span className={styles.parentLink}>{parent.title}</span>
              ) : (
                <a className={styles.parentLink}>{parent.title}</a>
              )}
              <HeaderChildren options={parent.children} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
