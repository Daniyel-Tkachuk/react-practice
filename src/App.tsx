import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion";
import {RatingValueType, UncontrolledRating} from "./components/rating/UnControlledRating";


function App() {
   const [value, setValue] = React.useState<RatingValueType>(2);
   const [collapsed, setCollapsed] = React.useState<boolean>(true);


   return (
      <div className="App">
         Controlled
         <Rating value={value} setValue={setValue}/>
         Uncontrolled
         <UncontrolledRating/>
         <hr/>
         Controlled
         <Accordion title="Controlled" collapsed={collapsed} setCollapsed={setCollapsed}/>
         Uncontrolled
         <UnControlledAccordion title="Uncontrolled"/>
         <hr/>
         Uncontrolled
         <OnOff/>
      </div>
   );
}

export default App;





