import React from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion";
import {OnOff} from "./components/onOff/OnOff";


function App() {
   const [value, setValue] = React.useState<RatingValueType>(2);
   const [collapsed, setCollapsed] = React.useState<boolean>(true);
   const [includedValue, setIncludedValue] = React.useState<boolean>(false);


   return (
      <div className="App">
         Controlled
         <Rating value={value} setValue={setValue}/>
         Uncontrolled
         <hr/>
         Controlled
         <Accordion title="Controlled" collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
         Uncontrolled
         <UnControlledAccordion title="Uncontrolled"/>
         <hr/>
         Controlled
         <OnOff includeValue={includedValue} setIncludeValue={setIncludedValue}/>
         Uncontrolled
         <UncontrolledOnOff/>
      </div>
   );
}

export default App;





