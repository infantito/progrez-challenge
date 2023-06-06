import styles from './page.module.scss'

import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <article className="wrapper">
        <header className="header"></header>
        <section className="content"></section>
        <footer className="footer"></footer>
      </article>
    </main>
  )
}
