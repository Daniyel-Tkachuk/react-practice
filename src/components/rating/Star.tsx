import React, {FC} from 'react';
import {TypeNumbers} from "./UnControlledRating";

type Props = {
    selected: boolean
    value?: TypeNumbers
    setValue?: (value: TypeNumbers) => void
}
export const Star: FC<Props> = (props) => {
    const {selected, value, setValue} = props;

    const onClickHandler = () => {
        value && setValue?.(value)
    }

    return (
        <span style={{marginRight: "8px"}} onClick={onClickHandler}>
            {selected ? <b>star</b> : 'star'}
        </span>
    )


};