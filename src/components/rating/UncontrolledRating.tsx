import React, {FC, useState} from 'react';
import s from './Rating.module.css';


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type Props = {

}
export const UncontrolledRating: FC<Props> = (props) => {

   const [value, setValue] = useState<RatingValueType>(0);

   return (
      <div>
         <Star selected={value > 0} setValue={() => setValue(1)}/>
         <Star selected={value > 1} setValue={() => setValue(2)}/>
         <Star selected={value > 2} setValue={() => setValue(3)}/>
         <Star selected={value > 3} setValue={() => setValue(4)}/>
         <Star selected={value > 4} setValue={() => setValue(5)}/>
      </div>
   );
}


type StarProps = {
   selected: boolean
   setValue: () => void
}
const Star: FC<StarProps> = (props) => {
   const {selected, setValue} = props;

   const styles = `${s.star} ${selected && s.selected}`;

   const onClickHandler = () => setValue();

   return (
     <span className={styles} onClick={onClickHandler}>★</span>
   );
}
