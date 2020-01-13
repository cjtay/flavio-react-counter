import React from 'react';
import './Button.css';

export default function Button({
    sign,
    increment,
    handleIncrement,
    handleDecrement
}) {
    const handleClick = () => {
        if (sign === '+') {
            handleIncrement(increment);
        } else if (sign === '-') {
            handleDecrement(increment);
        }
    };
    return (
        <div className="Button">
            <button onClick={handleClick}>
                {sign}
                {increment}
            </button>
        </div>
    );
}
