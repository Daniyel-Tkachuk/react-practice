import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";



type Props = {
    title: string
    collapsed: boolean
}
export const Accordion: FC<Props> = (props) => {
    const {title, collapsed} = props;

    return (
        <div>
            <AccordionTitle title={title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}