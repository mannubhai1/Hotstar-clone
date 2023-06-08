import React from 'react'
import styles from  './Main.module.css'

const Main = () => {
  return (
    <div className={styles.big}>
        <div className={styles.sidebar}>
            <img src="./disney-hotstar-1.jpg" alt="main logo" />
            <a href="/main" class={styles.buttonClass}> Upgrade {'>'}</a>
            <nav className={styles.navbar}>    
                <a href="./main">
                    <img src="./logo1.svg" className={styles.logo1} alt="" />

                </a>
                <a href="./main">
                    <img src="./logo2.svg" className={styles.logo2} alt="" />
                </a>
                <a href="./main">
                    <img src="./logo3.svg" className={styles.logo3} alt="" />
                </a>
                <a href="./main">
                    <img src="./logo4.svg" className={styles.logo4} alt="" />
                </a>
                <a href="./main">
                    <img src="./logo5.svg" className={styles.logo5} alt="" />
                </a>
                <a href="./main">
                    <img src="./logo6.svg" className={styles.logo6} alt="" />
                </a>
            </nav>
        </div>
        <div className={styles.content}>
           <p> hello </p>
        </div>
        {/* <div className={styles.new}>
            <p> hello </p>
        </div> */}
    </div>
  )
}

export default Main
