import React, {FC, useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css';

type ItemType = {
   title: string
   value: any
}

type Props = {
   value?: any
   onChange: (value: any) => void
   items: ItemType[]
}

export const Select: FC<Props> = (props) => {
   const {items, value, onChange} = props;

   const [active, setActive] = React.useState<boolean>(false);
   const [hoveredElementValue, setHoveredElementValue] = useState(value)

   const selectedItem = items.find(item => item.value === value);
   const hoveredItem = items.find(item => item.value === hoveredElementValue);

   useEffect(() => {
      setHoveredElementValue(value);
   }, [value])

   const toggleItems = () => {
      setActive(!active);
   }

   const onClickHandler = (newValue: any) => {
      onChange(newValue);
      toggleItems();
   };

   const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
         for (let i = 0; i < items.length; i++) {
            if (items[i].value === hoveredElementValue) {
               const currentElement = e.key === "ArrowDown"
                  ? items[i + 1]
                  : items[i - 1];

               if (currentElement) {
                  onChange(currentElement.value);
                  return;
               }
            }
         }
         if (!selectedItem) {
            onChange(items[0].value);
         }

      }

      if (e.key === "Enter" || e.key === "Escape") {
         setActive(false);
      }
   }

   return (
      <div className={s.select} tabIndex={0} onKeyUp={onKeyUpHandler}>
         <span className={s.main} onClick={toggleItems}>
            {selectedItem && selectedItem.title}
         </span>
         {
            active &&
             <div className={s.items}>
                {items.map(el => <div key={el.value}
                                      className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                                      onClick={() => onClickHandler(el.value)}
                                      onMouseEnter={() => setHoveredElementValue(el.value)}
                >
                   {el.title}
                </div>)}
             </div>
         }
      </div>
   );
};
