import React, {FC} from 'react';
import s from './Select.module.css';

type ItemType = {
   title: string
   value: any
}

type Props = {
   value?: string
   onChange: (value: any) => void
   items: ItemType[]
}

export const Select: FC<Props> = (props) => {
   const {items, value, onChange} = props;

   const [active, setActive] = React.useState<boolean>(false);

   const toggleItems = () => {
      setActive(!active);
   }

   const itemClicked = (value: any) => {
      onChange(value);
   }

   const selectedItem = items.find(item => item.value === value);

   return (
      <div className={s.select}>
         <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
         {
            active &&
             <div className={s.items}>
                {items.map(el => <div key={el.value} onClick={() => onChange(value)}>{el.title}</div>)}
             </div>
         }
      </div>
   );
};
