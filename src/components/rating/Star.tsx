import React, {FC} from 'react';
import {RatingValueType} from "./UnControlledRating";

type Props = {
    selected: boolean
    value?: RatingValueType
    setValue?: (value: RatingValueType) => void
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