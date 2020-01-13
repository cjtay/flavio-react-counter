import React, { useState } from 'react';
import Button from './Button';
import Reset from './Reset';
import Save from './Save';

import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState([]);

    const handleIncrement = increment => {
        setCount(count + increment);
    };

    const handleDecrement = Decrement => {
        setCount(count - Decrement);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleSave = () => {};

    return (
        <>
            <div className="App">
                <Button
                    sign={'+'}
                    increment={1}
                    handleIncrement={handleIncrement}
                />
                <Button
                    sign={'+'}
                    increment={10}
                    handleIncrement={handleIncrement}
                />
                <Button
                    sign={'+'}
                    increment={100}
                    handleIncrement={handleIncrement}
                />

                <Button
                    sign={'-'}
                    increment={1}
                    handleDecrement={handleDecrement}
                />
                <Button
                    sign={'-'}
                    increment={10}
                    handleDecrement={handleDecrement}
                />
                <Button
                    sign={'-'}
                    increment={100}
                    handleDecrement={handleDecrement}
                />

                <span>{count}</span>
                <Save handleSave={handleSave} />
                <Reset reset={handleReset} />
            </div>
        </>
    );
}

export default App;
