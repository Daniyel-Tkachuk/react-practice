import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemType} from "./Accordion";
import {changeCollapsed, reducerAccordion} from "./reducer/rudecer";

type Props = {
    title: string
    items: ItemType[]
}
export const UnControlledAccordion: FC<Props> = (props) => {
    const {title, items} = props;

    const [state, dispatch] = React.useReducer(reducerAccordion, {collapsed: true});

    const setCollapsedHandler = () => {
        dispatch(changeCollapsed());
    }

    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsedHandler}/>
            {!state.collapsed && <AccordionBody items={items} onClick={() => {}}/>}
        </div>
    );
}