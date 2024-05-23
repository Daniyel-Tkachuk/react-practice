import React, {FC} from 'react';

type ItemType = {
   title: string
   value: any
}

type Props = {
   value: string
   onChange: () => void
   items: ItemType[]
}

export const Select: FC<Props> = (props) => {
   const {items} = props;

   return (
      <div>
         <div>{}</div>
         {items.map(el => {
            return (
               <div>{el.title}</div>
            )
         })}
      </div>
   );
};
