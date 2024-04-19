import React, {FC} from 'react';

type Props = {
    title: string
}
export const AccordionTitle: FC<Props> = (props) => {
    const {title} = props;

    return (
        <h3>
            -- {title} --
        </h3>
    );
};