import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <div>
            <button className={props.btnStyle}>{props.text}</button>
        </div>
    );
}

export default NumberButton;