import styles from './hamburger.module.scss'

const Hamburger = () => {
  return (
    <>
      <input className={styles.toggle} id="toggle" type="checkbox"></input>
      <label htmlFor="toggle" className={styles.hamburger}>
        <span className={styles.pipe}></span>
        <span className={styles.pipe}></span>
        <span className={styles.pipe}></span>
      </label>
    </>
  )
}

export default Hamburger
