import React,{useEffect, useState} from 'react'
import styles from "./Favorite.module.css";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import data from '../../data.json';

const Favorite = () => {
    const [movies, setMovies] = useState([]);
    const movieSet = useSelector(state => state.movies);
    useEffect(() => {
        setMovies(movieSet)
    }, [movieSet])

  return (
    <>
    <div className={styles.main}>
        <div className={styles.favmovies}>
            <p className={styles.favhead}>Favorite Movies</p>
        </div>
        <hr />
        <div className={styles.sidebar}>
                <img src="/disney-hotstar-1.jpg" className={styles.mainlogo} alt="main logo" />
                <a href="/main" className={styles.buttonClass}> Upgrade {'>'}</a>
                <nav className={styles.navbar}>
                    <a href="./main">
                        <Link to = "/home/favorite">
                            <img src="/logo1.svg" className={styles.logo1} alt="l" />
                        </Link>
                        <span className={styles.sidebarHeadings}> My Space </span>

                    </a>
                    <a href="/home">
                        <img src="/logo2.svg" className={styles.logo2} alt="" />
                        <span className={styles.sidebarHeadings}> Search </span>
                    </a>
                    <a href="/home">
                        <img src="/logo3.svg" className={styles.logo3} alt="" />
                        <span className={styles.sidebarHeadings}> Home </span>
                    </a>
                    <a href="/home">
                        <img src="/logo4.svg" className={styles.logo4} alt="" />
                        <span className={styles.sidebarHeadings}> TV </span>
                    </a>
                    <a href="/home">
                        <img src="/logo5.svg" className={styles.logo5} alt="" />
                        <span className={styles.sidebarHeadings}> Movies </span>
                    </a>
                    <a href="/home">
                        <img src="/logo6.svg" className={styles.logo6} alt="" />
                        <span className={styles.sidebarHeadings}> Sports </span>
                    </a>
                </nav>
            </div>
            <div className={styles.media}>
                    {movies.map(id=>{
                        return (
                            <div className={styles.element}>
                                <Link to={`/home/movie/${id}`}>
                                    <img src={data.movies[id].cardImg} className={styles.images} alt="movieCard" />
                                </Link>
                            </div>
                        )
                    })}
            </div>
    </div>
    </>
  )
}

export default Favorite

// return (
//     <div className={styles.element}>
//         <Link to={`/home/movie/${movie.id - 1 }`}>
//             <img src={movie.cardImg} className={styles.images} alt="movieCard" />
//         </Link>
//     </div>
// )
