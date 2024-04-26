import React, {FC} from 'react';
import s from './OnOff.module.css';

type Props = {
   included: boolean
}

export const OnOff: FC<Props> = ({included}) => {

   const onStyles = {
      background: included ? "green" : '',
   }

   const offStyles = {
      background: included ? "" : "red",
   }

   const bulbStyles = {
      background: included ? "green" : "red",
   }

   return (
      <div className={s.box}>
         <div style={onStyles} className={s.button}>
            <span>on</span>
         </div>
         <div style={offStyles} className={s.button}>
            <span>off</span>
         </div>
         <div style={bulbStyles} className={s.bulb}></div>
      </div>
   );
};