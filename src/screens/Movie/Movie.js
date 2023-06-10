import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json"
import styles from "./Movie.module.css";

function Movie() {
  let { id } = useParams();
  // console.log(data.movies[id]);  
  return (
    <div className={styles.main} style={{ backgroundImage: "url(" + data.movies[id].backgroundImg + ")" }} >
      <div className={styles.heading}>
        <img className={styles.disney} src="./disney_header.png" alt="disney logo" />
        <button className={styles.btn}>Login</button>
      </div>
      <div>
        <img src={data.movies[id].titleImg} className={styles.bg} alt="movie logo" />
      </div>
      <div className={styles.content} >
        <button className={styles.btn1} > Play </button>
        <button className={styles.btn2} > Trailer </button>
        <p>{data.movies[id].subTitle}</p>

        <p style={{ color: "white" }} className={styles.desc}>
          {data.movies[id].description}
        </p>

      </div>
    </div>
  );
}

export default Movie;
