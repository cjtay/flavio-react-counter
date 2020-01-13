import React from 'react';

export default function Button() {
    const handleClick = () => {
        onClickFunction(increment);
    };

    return <button onClick={handleClick}>+{increment}</button>;
}
