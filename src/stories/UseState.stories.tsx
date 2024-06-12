import {useMemo, useState} from "react";

export default {
   title: "useState demo"
}

const generateNumber = () => {
   console.log("difficult counting");
   let fake = 0;
   while (fake < 100000000) {
      fake++;
      const random = Math.random();
   }
   return 1;
}

export const Example1 = () => {
   console.log("Example-1")
   // const initialValue = useMemo(generateNumber, []);

   const [counter, setCounter] = useState(generateNumber);

   return (
      <div>
         <span style={{marginRight: "10px"}}>{counter}</span>
         <button onClick={() => setCounter(state => state + 1)}>
            <b>+</b>
         </button>
      </div>
   )
}