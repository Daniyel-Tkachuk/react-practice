import {useState} from "react";

export default {
   title: "useState demo"
}

export const Example1 = () => {
   console.log("Example-1")
   const [counter, setCounter] = useState(0);

   const addCounter = () => {
      setCounter(counter + 1);
   }

   return (
      <div>
         <span>{counter}</span>
         <button onClick={addCounter}>add</button>
      </div>
   )
}