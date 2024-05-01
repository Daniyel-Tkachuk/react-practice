import React, {FC} from 'react';
import s from './OnOff.module.css';

type Props = {
   // included?: boolean
}

export const OnOff: FC<Props> = ({...restProps}) => {

   const [includeValue, setIncludeValue] = React.useState<boolean>(false);

   /*const styles = {
      on: {background: included ? "green" : "white"},
      off: {background: included ? "white" : "red"},
      bulb: {background: included ? "green" : "red"}
   }*/
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