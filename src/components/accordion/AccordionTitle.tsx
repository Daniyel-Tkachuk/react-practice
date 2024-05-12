import React, {FC} from 'react';

type Props = {
   title: string
   setCollapsed: () => void
}
export const AccordionTitle: FC<Props> = (props) => {
   const {title, setCollapsed} = props;

   const onClickHandler = () => {
      setCollapsed();
   }

   return (
      <h3 onClick={onClickHandler}>
         -- {title} --
      </h3>
   );
};