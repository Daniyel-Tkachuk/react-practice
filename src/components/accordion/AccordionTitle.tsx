import React, {FC} from 'react';

type Props = {
   title: string
   setCollapsed: () => void
}
export const AccordionTitle: FC<Props> = (props) => {
   const {title, setCollapsed} = props;



   return (
      <h3 onClick={setCollapsed}>
         -- {title} --
      </h3>
   );
};