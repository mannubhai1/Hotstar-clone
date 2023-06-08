import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.p1}>
        <ul>
            <li> Company</li>
            <li> About us</li>
            <li> Careers</li>
            <p>&copy </p>
        </ul>
      </div>
    </div>
  )
}

export default Footer
