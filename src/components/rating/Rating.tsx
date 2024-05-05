import React, {FC} from 'react';
import {Star} from "./Star";
import {RatingValueType} from "./UnControlledRating";

type Props = {
   value: 1 | 2 | 3 | 4 | 5
   setValue: (value: RatingValueType) => void
}
export const Rating: FC<Props> = (props) => {

   const {value, setValue} = props;

   return (
      <div>
         <Star selected={value > 0} value={1} setValue={setValue}/>
         <Star selected={value > 1} value={2} setValue={setValue}/>
         <Star selected={value > 2} value={3} setValue={setValue}/>
         <Star selected={value > 3} value={4} setValue={setValue}/>
         <Star selected={value > 4} value={5} setValue={setValue}/>
      </div>
   );
}