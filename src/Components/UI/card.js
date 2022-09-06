import React from 'react';
import classes from './card.module.css';

const Card = (props) =>
{
        //Structure and layout of the card component
    return(
        <div className={`${classes.card} ${props.className}`} >
            {props.children}
        </div>
    )
}

export default Card;