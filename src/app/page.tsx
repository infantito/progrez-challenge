import styles from './page.module.scss'

import { Header } from '@containers'

function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content}></section>
      <footer className={styles.footer}></footer>
    </main>
  )
}

export default Page
