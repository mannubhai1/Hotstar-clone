import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.p1}>
        <ul>
          <li className={styles.mainli}> Company</li>
          <li> About us</li>
          <li> Careers</li>
          <p className={styles.foot}> &copy; 2023 STAR. All Rights Reserved.</p>
          <span className={styles.foot2}> Terms Of Use    Privacy Policy    FAQ</span >
        </ul>
      </div>
      <div className={styles.p1}>
        <ul>
          <li className={styles.mainli}> View Website in</li>
          <li> <img src="./correct-signal-svgrepo-com.svg" alt="tick" className={styles.tick} /> English </li>
        </ul>
      </div>
      <div className={styles.p1}>
        <ul>
          <li className={styles.mainli}> Need Help?</li>
          <li> Visit Help center </li>
          <li> Share Feedback </li>
        </ul>
      </div>
      <div className={styles.p1}>
        <ul>
          <li className={styles.mainli}>Connect with Us</li>
          <li> <img src="./facebook-svgrepo-com.svg" alt="fb" className={styles.fb} /> <img src="./twitter-svgrepo-com.svg" alt="tw" className={styles.tw} /></li>

        </ul>
      </div>
    </div>
  )
}

export default Footer
