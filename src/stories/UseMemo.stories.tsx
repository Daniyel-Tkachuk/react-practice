import {useMemo, useState} from "react";

export default {
   title: 'useMemo'
}

export const Example1 = () => {
   const [a, setA] = useState(3);
   const [b, setB] = useState(5);

   let resultA = 1;
   let resultB = 1;

   resultA = useMemo(() => {
      let tempResult = 1;
      for (let i = 1; i <= a; i++) {
         let fake = 0;
         while (fake < 100000000) {
            fake++;
            const fakeValue = Math.random();
         }
         tempResult *= i;
      }
      return tempResult;
   }, [a])



   for (let i = 1; i <= b; i++) {
      resultB *= i
   }

   return (
      <>
         <div style={{marginBottom: "15px"}}>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
         </div>
         <div>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
         </div>

         <hr/>

         <div>
            Result for a: {resultA}
         </div>
         <div>
            Result for b: {resultB}
         </div>
      </>
   )
}