import React, {FC} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type Props = {
    title: string
}
export const UnControlledAccordion: FC<Props> = (props) => {
    const {title} = props;

    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={title} setCollapsed={setCollapsedHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}