import React from 'react'
import styles from './Main.module.css'
import Footer from '../../components/Footer'
import Carousell from '../../components/Carousel'

const Main = () => {
    return (
        <div className={styles.big}>
            <div className={styles.sidebar}>
                <img src="./disney-hotstar-1.jpg" className={styles.mainlogo} alt="main logo" />
                <a href="/main" class={styles.buttonClass}> Upgrade {'>'}</a>
                <nav className={styles.navbar}>
                    <a href="./main">
                        <img src="./logo1.svg" className={styles.logo1} alt="" />
                        <span className={styles.sidebarHeadings}> My Space </span>

                    </a>
                    <a href="./main">
                        <img src="./logo2.svg" className={styles.logo2} alt="" />
                        <span className={styles.sidebarHeadings}> Search </span>
                    </a>
                    <a href="./main">
                        <img src="./logo3.svg" className={styles.logo3} alt="" />
                        <span className={styles.sidebarHeadings}> Home </span>
                    </a>
                    <a href="./main">
                        <img src="./logo4.svg" className={styles.logo4} alt="" />
                        <span className={styles.sidebarHeadings}> TV </span>
                    </a>
                    <a href="./main">
                        <img src="./logo5.svg" className={styles.logo5} alt="" />
                        <span className={styles.sidebarHeadings}> Movies </span>
                    </a>
                    <a href="./main">
                        <img src="./logo6.svg" className={styles.logo6} alt="" />
                        <span className={styles.sidebarHeadings}> Sports </span>
                    </a>
                </nav>
            </div>
            <div className={styles.content}>
                {/* <p> Hello here will be the main content </p> */}
                <Carousell />
            </div>
            <Footer />
        </div>
    )
}

export default Main
