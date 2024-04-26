import React, {FC} from 'react';
import s from './OnOff.module.css';

type Props = {
   included: boolean
}

export const OnOff: FC<Props> = ({included}) => {

   const styles = {
      on: {background: included ? "green" : ''},
      off: {background: included ? "" : "red"},
      bulb: {background: included ? "green" : "red"}
   }

   return (
      <div className={s.box}>
         <div style={styles.on} className={s.button}>
            <span>on</span>
         </div>
         <div style={styles.off} className={s.button}>
            <span>off</span>
         </div>
         <div style={styles.bulb} className={s.bulb}></div>
      </div>
   );
};