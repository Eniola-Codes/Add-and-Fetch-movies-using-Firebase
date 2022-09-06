import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>
{
    //Structure and layout of the button component
    return (
        <button type={props.type} className={classes.button} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;