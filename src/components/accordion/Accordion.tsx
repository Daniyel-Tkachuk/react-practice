import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type Props = {
    title: string
    items: ItemType[]
    collapsed: boolean
    onClick: (value: any) => void
    setCollapsed: () => void
}

export type ItemType = {
    title: string
    value: any
}

export const Accordion: FC<Props> = (props) => {
    const {title, items, collapsed, onClick, setCollapsed} = props;


    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsed}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    );
}