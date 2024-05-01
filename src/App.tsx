import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/rating/UnControlledRating";


function App() {

   return (
      <div className="App">
         <Rating value={4}/>
         <UncontrolledRating/>
         <hr/>
         <Accordion title="Controlled" collapsed={false}/>
         <UnControlledAccordion title="Uncontrolled"/>
         <hr/>
         <OnOff/>
      </div>
   );
}

export default App;





