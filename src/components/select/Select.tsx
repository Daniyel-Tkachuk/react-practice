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
   const {items, value} = props;

   const selectedItem = items.find(item => item.value === value);

   return (
      <div>
         <h3>{selectedItem && selectedItem.title}</h3>
         {items.map(el => {
            return (
               <div key={el.value}>{el.title}</div>
            )
         })}
      </div>
   );
};
