import type {Meta} from '@storybook/react';

import {Accordion} from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
   component: Accordion,
};


export default meta;

export const CollapsedAccordion = () => {
   return <Accordion title="Collapsed Accordion" collapsed={true} setCollapsed={() => {}}/>
}

export const OpenedAccordion = () => {
   return <Accordion title="Opened Accordion" collapsed={false} setCollapsed={() => {}}/>
}

export const AccordionDemo = () => {
   const [collapsed, setCollapsed] = useState<boolean>(false);

   return <Accordion title="Opened Accordion" collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
}


