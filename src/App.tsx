import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

function App() {


    return (
        <div className="App">
            <Rating value={3}/>
            <Accordion title="Menu" collapsed={false}/>
            <Accordion title="|Users" collapsed={true}/>
        </div>
    );
}

export default App;




