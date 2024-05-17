import React, {ChangeEvent} from "react";
import { action } from '@storybook/addon-actions';


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

export const ControlledInput = () => {
   const [parentValue, setParentValue] = React.useState("");

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setParentValue(e.currentTarget.value);
      action("onChangeHandler")(e.currentTarget.value);
   }

   return <input type="text" value={parentValue} onChange={onChangeHandler}/>
}

export const controlledCheckbox = () => {
   const [checked, setChecked] = React.useState(false);

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.currentTarget.checked);
      action("onChangeHandler")(e.currentTarget.checked);
   }

   return <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
}

export const controlledSelect = () => {
   const [options, setOptions] = React.useState<string | undefined>("2");

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setOptions(e.currentTarget.value);
      action("onChangeHandler")(e.currentTarget.value);
   }

   return (
      <select value={options} onChange={onChangeHandler}>
         <option value="">none</option>
         <option value="1">Минск</option>
         <option value="2">Гродно</option>
         <option value="3">Гомель</option>
      </select>
   )
}