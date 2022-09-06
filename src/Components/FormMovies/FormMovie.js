import React from "react";
import classes from "./FormMovie.module.css";

const FormMovies = (props) => {
  //Structure and layout of the props info
  return (
      <div className={classes.movie_div}>
        <div className={classes.movie}>
          <div className={classes.movie_header}>
            <h2>{props.title}</h2>
          </div>
          <div>
            <p className={classes.movie_release}>{props.releaseDate}</p>
            <p className={classes.movie_body}>
             {props.openingText}
            </p>
          </div>
          <div className={classes.producer}>
            <p>{props.producer}</p>
            <p>{props.director}</p>
          </div>
        </div>
      </div>
  );
};

export default FormMovies;
