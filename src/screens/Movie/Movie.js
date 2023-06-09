import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import styles from "./Movie.module.css";
import Header from "../../components/Header";

function Movie() {
  let { id } = useParams();
  console.log(data.movies[id]);
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: "url(" + data.movies[id].backgroundImg + ")" }}
    >
      <Header />
      <img
        src={data.movies[id].titleImg}
        className={styles.bg}
        alt="movie logo"
      />
      <button className={styles.btn1}> Play </button>
      <button className={styles.btn2}> Trailor </button>
      <h2 style={{ color: "white" }} className={styles.desc}>
        {data.movies[id].description}
      </h2>
      <p>{data.movies[id].subTitle}</p>
    </div>
  );
}

export default Movie;
