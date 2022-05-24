import styles from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img src="/landing.svg" alt="landing logo" />
        <div className={styles.phraseContainer}>
          <h1>If you can dream it</h1>
          <h2>You can make it!</h2>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
