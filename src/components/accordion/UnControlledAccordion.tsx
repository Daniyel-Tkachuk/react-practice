import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemType} from "./Accordion";

type Props = {
    title: string
    items: ItemType[]
}
export const UnControlledAccordion: FC<Props> = (props) => {
    const {title, items} = props;

    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsedHandler}/>
            {!collapsed && <AccordionBody items={items} onClick={() => {}}/>}
        </div>
    );
}