import React, { useRef } from "react";
import Card from "../UI/card";
import classes from "./FormInput.module.css";
import Button from "../UI/Button";

const FormInput = (props) => {
 const titleRef = useRef('');
 const textRef = useRef('');
 const releaseRef = useRef('');
 const directorRef = useRef('');
 const producerRef = useRef('');

const onSubmitHandler = (event) =>
{
    event.preventDefault();


    const values =
    {
         title : titleRef.current.value,
         openingText : textRef.current.value,
         releaseDate : releaseRef.current.value,
         director : directorRef.current.value,
         producer : producerRef.current.value
    }

    // console.log(values);
    props.onMovieValue(values);

    event.target.reset();
}
  //Rendering the Form inputs component
  return (
    <Card className={classes.card}>
        <form onSubmit={onSubmitHandler}>
      <div className={classes.input_field}>
        <div className={classes.input_div}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleRef}></input>
        </div>

        <div className={classes.input_div}>
          <label htmlFor="opening_text">Opening Text</label>
          <textarea id="opening_text" type="text" ref={textRef}></textarea>
        </div>

        <div className={classes.input_div}>
          <label htmlFor="title">Release date</label>
          <input id="title" type="text" ref={releaseRef}></input>
        </div>

        <div className={classes.input_div}>
          <label htmlFor="title">Director</label>
          <input id="title" type="text" ref={directorRef}></input>
        </div>

        <div className={classes.input_div}>
          <label htmlFor="title">Producer</label>
          <input id="title" type="text" ref={producerRef}></input>
        </div>

        <div className={classes.submit_div}>
          <Button type="submit">Add Movie</Button>
        </div>

      </div>
      </form>
    </Card>
  );
};

export default FormInput;
