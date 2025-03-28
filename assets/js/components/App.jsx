import React from 'react';
import Button from '@mui/material/Button';

const App = () => {
    const clickHandler = () => {
        alert('clicked');
    };

    return <>
        <h1>Hello from React inside Symfony!</h1>
        <Button variant="contained" onClick={() => {clickHandler()}}>Hello World</Button>
    </>;
};

export default App;