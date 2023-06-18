import React, { useEffect, useState, useCallback } from 'react'
// import HeroSlider, { Slide, Nav } from "hero-slider";
import data from '../data.json';
import styles from './Caras.module.css'

function Caras() {
    const [index, setIndex] = useState(0);
    let movies = data.movies.filter(m => m.type === "new");
    const next = useCallback(() => {
        setIndex((index + 1) % movies.length);
    }, [index, movies])

    function prev() {
        setIndex((index - 1) % movies.length);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);
        return () => clearInterval(interval);
    }, [index, next]);
    return (
        <div className={styles.carousel_wrapper} style={{ backgroundImage: `url(${movies[index].cardImg})` }}>
            <button className={styles.arrows} style={{ float: "right" }} onClick={next}>{'>'}</button>
            <button className={styles.arrows} onClick={prev}> {'<'} </button>
        </div>
    )
}

export default Caras