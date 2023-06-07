'use client'

import bgImage from '@assets/background.jpg'
import styles from './page.module.scss'

import * as React from 'react'

import { fetchMenuApi } from '@services'
import { Footer, Header } from '@containers'
import { queryClient } from '@utils'

const backgroundImage = `url(${bgImage.src})`

function Page() {
  const menu = React.use(queryClient('menu', fetchMenuApi))

  if (typeof menu === 'string') {
    return <p className="p-6">{menu}</p>
  }

  return (
    <main className={styles.main}>
      <Header menu={menu} />
      <section className={styles.content} style={{ backgroundImage }}></section>
      <Footer />
    </main>
  )
}

export default Page
