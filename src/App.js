import React, { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
    const [count, setCount] = useState(1);

    const handleClick = increment => {
        console.log(increment);
    };

    return (
        <>
            <div className='App'>
                <Button increment={1} handleClick={handleClick} />
            </div>
            <span>{count}</span>
        </>
    );
}

export default App;
