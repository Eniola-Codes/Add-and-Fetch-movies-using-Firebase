import React from 'react';
import Card from '../UI/card';
import Button from '../UI/Button';
import classes from './FormFetch.module.css'

const FormFetch = (props) =>
{
    //rendering the fetch button
    return (
        <Card className={classes.card}>
            <Button type="button" onClick={props.onFetch}>Fetch Movies</Button>
        </Card>
    )
}

export default FormFetch;