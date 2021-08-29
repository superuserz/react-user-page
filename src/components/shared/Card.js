import React from 'react'
import classes from './Card.module.css';
//We want our card to only pass on and show its children (content wrapped in it)
function Card(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card;
