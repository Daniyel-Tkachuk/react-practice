import React, {FC} from 'react';
import s from './OnOff.module.css';

type Props = {

}

export const UncontrolledOnOff: FC<Props> = ({...restProps}) => {

   const [includeValue, setIncludeValue] = React.useState<boolean>(false);

   const styles = {
      on: {background: includeValue ? "green" : "white"},
      off: {background: includeValue ? "white" : "red"},
      bulb: {background: includeValue ? "green" : "red"}
   }

   const onClickOn = () => {
      setIncludeValue(true);
   };

   const onClickOff = () => {
      setIncludeValue(false);
   }

   return (
      <div className={s.box}>
         <div style={styles.on} className={s.button} onClick={onClickOn}>
            <span>on</span>
         </div>
         <div style={styles.off} className={s.button} onClick={onClickOff}>
            <span>off</span>
         </div>
         <div style={styles.bulb} className={s.bulb}/>
      </div>
   );
};