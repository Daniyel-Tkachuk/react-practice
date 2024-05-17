import React, {ChangeEvent} from "react";

export default {
   title: "input"
}

export const UncontrolledInput = () => <input type="text"/>;

export const TrackValueOfUncontrolledInput = () => {
   const [value, setValue] = React.useState("");

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
   }

   return (
      <div>
         <span>
            <input type="text" onChange={onChangeHandler}/>
            value: {value}
         </span>
      </div>
   )
};

export const GetValueOfUncontrolledInput = () => {
   const [value, setValue] = React.useState("");
   const inputRef = React.useRef<HTMLInputElement | null>(null)

   const save = () => {
      const el = inputRef.current;
      if (el) {
         setValue(el.value);
      }
   }

   return (
      <div>
         <input type="text" ref={inputRef}/>
         <button onClick={save}>save</button>
         <span>value: <b>{value}</b></span>
      </div>
   )
};

export const ControlledInputWithFixedValue = () => {
   return <input type="text" value="it-incubator"/>
};