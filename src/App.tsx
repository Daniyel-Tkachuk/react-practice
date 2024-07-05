import React from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/rating/Rating";
import {Accordion, ItemType} from "./components/accordion/Accordion";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledRating} from "./components/rating/UncontrolledRating";
import {Select} from "./components/select/Select";
import {SimpleExample_2} from "./stories/UseEffect.stories";


function App() {
   const [value, setValue] = React.useState<RatingValueType>(2);
   const [collapsed, setCollapsed] = React.useState<boolean>(true);
   const [includedValue, setIncludedValue] = React.useState<boolean>(false);
   const [selectValue, setSelectValue] = React.useState("2");

   const state: ItemType[] = [
      {title: "Минск", value: "1"},
      {title: "Гродно", value: "2"},
      {title: "Витебск", value: "3"},
      {title: "Гомель", value: "4"},
   ]

   return (
      <div className="App">
         Controlled
         <Rating value={value} setValue={setValue}/>
         Uncontrolled
         <UncontrolledRating />
         <hr/>
         Controlled
         <Accordion title="Controlled"
                    items={state}
                    onClick={value => {console.log(value)}}
                    collapsed={collapsed}
                    setCollapsed={() => setCollapsed(!collapsed)}/>
         Uncontrolled
         <UnControlledAccordion title="Uncontrolled" items={state}/>
         <hr/>
         Controlled
         <OnOff includeValue={includedValue} setIncludeValue={setIncludedValue}/>
         Uncontrolled
         <UncontrolledOnOff/>
         <hr/>
         Select
         <Select onChange={setSelectValue} items={state} value={selectValue}/>
         <hr/>
      </div>
   );
}

export default App;





