import React, {FC} from 'react';
import s from './OnOff.module.css'

type Props = {
   includeValue: boolean
   setIncludeValue: (value: boolean) => void
}

export const OnOff: FC<Props> = (props) => {

   const {includeValue, setIncludeValue} = props;

   const styles = {
      on: {background: includeValue ? "green" : "white"},
      off: {background: includeValue ? "white" : "red"},
      bulb: {background: includeValue ? "green" : "red"}
   }

   return (
      <div className={s.box}>
         <div style={styles.on} className={s.button} onClick={() => setIncludeValue(true)}>
            <span>on</span>
         </div>
         <div style={styles.off} className={s.button} onClick={() => setIncludeValue(false)}>
            <span>off</span>
         </div>
         <div style={styles.bulb} className={s.bulb}/>
      </div>
   );
};