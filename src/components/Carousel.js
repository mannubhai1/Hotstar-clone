import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import data from '../data.json';
import styles from './Carousel.module.css';
import Caras from './Caras';

function Carousell() {
    return (
        <>
            <div className="slider">
                <Caras/>
            </div>
            <div className={styles.moviestack}>
                <p className={styles.movieheading}> Trending</p>
                <div className={styles.media}>
                    {data.movies.filter(m => m.type === "trending").map(movie => {
                        return (
                            <div className="element">
                                <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                            </div>
                        )
                    })}
                </div>
                <p className={styles.movieheading}> Recommend</p>
                <div className={styles.media}>
                    {/* <br /> */}
                    {data.movies.filter(m => m.type === "recommend").map(movie => {
                        return (
                            <div className="element">
                                <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                            </div>
                        )
                    })}
                </div>
                <p className={styles.movieheading}> Original</p>
                <div className={styles.media}>
                    {/* <br /> */}
                    {data.movies.filter(m => m.type === "original").map(movie => {
                        return (
                            <div className="element">
                                <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Carousell