import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json"
import styles from "./Movie.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../../state/index"
import {useSelector} from "react-redux"

function Movie() {
  let { id } = useParams();
  const movies = useSelector(state => state.movies);
  console.log(movies);
  // console.log(data.movies[id]);  
  const [check, setCheck] = useState(false);

  useEffect(() => {
    var favs = JSON.parse(localStorage.getItem("favs"));
    if(favs===null){
      favs=[];
    }
    if(favs.includes(id)){
      setCheck(true);
    }
    else setCheck(false);
  },[id]);

  const dispatch = useDispatch();
  const {favoriteMovie} = bindActionCreators(actionCreators,dispatch)

  return (
    <>
    <div className={styles.heading}>
      <img className={styles.disney} src="/disney_header.png" alt="disney logo" />
      <button className={styles.btn}>Login</button>
    </div>
    <div className={styles.main} style={{ backgroundImage: "url(" + data.movies[id].backgroundImg + ")" }} >
      
      <div>
        <img src={data.movies[id].titleImg} className={styles.bg} alt="movie logo" />
      </div>
      <div className={styles.content} >

        <button className={styles.btn1} > Play </button>

        <button className={styles.btn2} > Trailer </button>

        <button className={styles.fav} onClick={()=>{favoriteMovie(id);setCheck(!check)}}><img src={!check?"/favorite-heart-love-svgrepo-com.svg":"/heart-filled-svgrepo-com.svg"} alt="fav" /> </button> 

        <p>{data.movies[id].subTitle}</p>

        <p style={{ color: "white" }} className={styles.desc}><i className="fa fa-xing" aria-hidden="true"></i>
          {data.movies[id].description}
        </p>

      </div>
    </div>
    </>
  );
}

export default Movie;
