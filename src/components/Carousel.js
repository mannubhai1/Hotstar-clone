import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import data from '../data.json';
import styles from './Carousel.module.css';
import Caras from './Caras';
import { Link } from 'react-router-dom';

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
                                <Link to={`/home/movie/${movie.id - 1 }`}>
                                    <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                                </Link>
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
                                <Link to={`/home/movie/${movie.id - 1 }`}>
                                    <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                                </Link>
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
                                <Link to={`/home/movie/${movie.id - 1 }`}>
                                    <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <p className={styles.movieheading}> New</p>
                <div className={styles.media}>
                    {/* <br /> */}
                    {data.movies.filter(m => m.type === "new").map(movie => {
                        return (
                            <div className="element">
                                <Link to={`/home/movie/${movie.id - 1 }`}>
                                    <img src={movie.cardImg} className={styles.images} alt="movieCard" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Carousell