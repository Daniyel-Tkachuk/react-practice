import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";



type Props = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}
export const Accordion: FC<Props> = (props) => {
    const {title, collapsed, setCollapsed} = props;

    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}