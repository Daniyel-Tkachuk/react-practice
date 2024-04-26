import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";

// Создать компоненту OnOf (два квадрата: on - off + сбоку кружочек). Если true то ON подсвечивается зеленым + кружок.
// Если приходит false тогда OFF горит красным цветом + кружок.

function App() {


    return (
        <div className="App">
            <Rating value={4}/>
            <Accordion title="Menu" collapsed={false}/>
            <Accordion title="Users" collapsed={true}/>
            <OnOff included={true}/>
        </div>
    );
}

export default App;





