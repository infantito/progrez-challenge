import bgImage from '@assets/background.jpg'
import styles from './page.module.scss'

import { Header } from '@containers'

const backgroundImage = `url(${bgImage.src})`

function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.content} style={{ backgroundImage }}></section>
      <footer className={styles.footer}></footer>
    </main>
  )
}

export default Page
