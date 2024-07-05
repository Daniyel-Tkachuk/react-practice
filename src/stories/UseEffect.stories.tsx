import {useEffect, useState} from "react";

export default {
   title: "UseEffect demo"
}

export const SimpleExample = () => {
   console.log("SimpleExample")
   const [fake, setFake] = useState(1);
   const [counter, setCounter] = useState(1);

   useEffect(() => {
      console.log("UseEffect");
      document.title = counter.toString();
   }, [counter]);

   /*useEffect(() => {
      console.log("Сработает один раз тока после вмонтирования компонента")
   }, []);*/

   /*useEffect(() => {
      console.log("Будет срабатывать всегда, при любой перерисовке компонента")
   });*/

   /*useEffect(() => {
      console.log("Будет срабатывать тока после изменения завизимости - counter")
   }, [counter]);*/

   return (
      <div>
         <div>
            <span>counter - {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
         </div>
         <div>
            <span>fake - {fake}</span>
            <button onClick={() => setFake(fake + 1)}>+</button>
         </div>
      </div>
   )
};

export const SimpleExample_2 = () => {
   console.log("SimpleExample")
   const [fake, setFake] = useState(1);
   const [counter, setCounter] = useState(1);

   useEffect(() => {

      /*setInterval(() => {
         console.log("tick " + counter)
         setCounter((state) => state + 1);
      }, 1000)*/

   }, []);

   return (
      <div>
         <div>
            <span>counter: {counter}</span>
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
         </div>
         <div>
            <span>fake: {fake}</span>
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
         </div>
      </div>
   )
}

export const ClockDemo = () => {

   const [date, setDate] = useState(new Date());

   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();

   useEffect(() => {
      const timeId = setInterval(() => {
         setDate(new Date());
      }, 1000);

      return () => {
         clearInterval(timeId);
      }
   }, []);

   const formatTime = (number: number) => {
      return number.toString().padStart(2, "0");
      // return number < 10 ? `0${number}` : number;
   }

   return (
      <div>
         <span>{formatTime(hours)}:</span>
         <span>{formatTime(minutes)}:</span>
         <span>{formatTime(seconds)}</span>
      </div>
   )

}