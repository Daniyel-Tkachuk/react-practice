import React, {FC, useEffect} from 'react';
import s from "./Clock.module.css";

export type ClockProps = {}

export const Clock: FC<ClockProps> = (props) => {

   const [date, setDate] = React.useState<Date>(new Date());

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDate(new Date());
      }, 1000)

      return () => {
         clearInterval(intervalId);
      }
   }, []);

   const hh = date.getHours() * 30 + date.getMinutes() * 0.5;
   const mm = date.getMinutes() * 6;
   const ss = date.getSeconds() * 6;

   const stylesTime = {
      hr: {transform: `rotateZ(${hh}deg)`},
      mn: {transform: `rotateZ(${(mm)}deg)`},
      sc: {transform: `rotateZ(${(ss)}deg)`}
   }

   return (
      <div className={s.wrapper}>
         <div className={s.clock}>
            <div className={s.hour}>
               <div style={stylesTime.hr} className={s.hr}></div>
            </div>
            <div className={s.min}>
               <div style={stylesTime.mn} className={s.mn}></div>
            </div>
            <div className={s.sec}>
               <div style={stylesTime.sc} className={s.sc}></div>
            </div>
         </div>
      </div>
   );
};
