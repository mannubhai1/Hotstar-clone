import React from 'react'
import styles from  './Login.module.css'
import {Link} from 'react-router-dom'
import Header from '../../components/Header.js'

function Login() {
  return (
    <div className={styles.main}>
    <Header/>
      <div className={styles.content}>
          <img className={styles.logo1} src="./cta-logo-one.svg" alt="" />
          <Link to="/home"><button className={styles.btn_2}>
            Explore
          </button>
          </Link>
          <p className={styles.text}>Get premier access to Raya and the Last Dragon for an additional fee with Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1 </p>
          <img className={styles.logo2} src="./cta-logo-two.png" alt="" /> 
      </div>
    </div>
  )
}

export default Login
