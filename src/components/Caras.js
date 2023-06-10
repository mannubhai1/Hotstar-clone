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

// function Caras() {


//     return (
//         <HeroSlider
//             slidingAnimation="left_to_right"
//             orientation="horizontal"
//             initialSlide={1}
//             onBeforeChange={(previousSlide, nextSlide) =>
//                 console.log("onBeforeChange", previousSlide, nextSlide)
//             }
//             onChange={(nextSlide) => console.log("onChange", nextSlide)}
//             onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
//             style={{
//                 backgroundColor: "rgba(0, 0, 0, 0.33)"
//             }}
//             settings={{
//                 slidingDuration: 250,
//                 slidingDelay: 100,
//                 shouldAutoplay: true,
//                 shouldDisplayButtons: true,
//                 autoplayDuration: 1000,
//                 height: "100vh"
//             }}
//         >
//             {data.movies.filter(m => m.type === "new").map(movie => {
//                 return <Slide
//                     background={{
//                         backgroundImage: `{movie.movieCard}`,
//                         backgroundAttachment: "fixed"
//                     }}
//                 />
//             })}
//             <Nav />
//         </HeroSlider>
//     )
// }

export default Caras