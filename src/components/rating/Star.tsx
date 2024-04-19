import React, {FC} from 'react';

type Props = {
    selected: boolean
}
export const Star: FC<Props> = (props) => {
    const {selected} = props;

    return (
        <span style={{marginRight: "8px"}}>
            {selected ? <b>star</b> : 'star'}
        </span>
    )


};