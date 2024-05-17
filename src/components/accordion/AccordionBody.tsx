import React, {FC} from 'react';
import {ItemType} from "./Accordion";

type Props = {
   items: ItemType[]
   onClick: (value: any) => void
}

export const AccordionBody: FC<Props> = (props) => {
   const {items, onClick} = props;


    return (
        <ul>
           {
               items.map((el, i) => {
                  return (
                     <li key={`${i}-${el}`} onClick={() => onClick(el.value)}>{el.title}</li>
                  )
               })
           }
        </ul>
    );
};