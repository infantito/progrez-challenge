import logo from '@assets/isotipo.svg'

import Image from 'next/image'

import styles from './footer.module.scss'

const NOW = new Date()

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width={111}
          height={34}
          priority={true}
        />
        <span className={styles.text}>© {NOW.getFullYear()} Progrez All rights reserved</span>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          width={111}
          height={34}
          priority={true}
        />
      </div>
    </footer>
  )
}

export default Footer
