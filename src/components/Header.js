import React from 'react'
import styles from '../screens/Login/Login.module.css'

function Header() {
  return (
    <div className={styles.heading}>
        <img className={styles.disney} src="http://localhost:3001/disney_header.png" alt="disney logo" />
        <button className={styles.btn}>Login</button>
      </div>
  )
}

export default Header