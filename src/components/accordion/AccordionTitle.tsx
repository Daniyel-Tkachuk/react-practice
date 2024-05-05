import React, {FC} from 'react';

type Props = {
   title: string
   collapsed: boolean
   setCollapsed: (value: boolean) => void
}
export const AccordionTitle: FC<Props> = (props) => {
   const {title, collapsed, setCollapsed} = props;

   const onClickHandler = () => {
     setCollapsed(!collapsed)
   }

   return (
      <h3 onClick={onClickHandler}>
         -- {title} --
      </h3>
   );
};