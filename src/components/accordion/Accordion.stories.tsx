import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import React from "react";
import {fn} from "@storybook/test";


const meta: Meta<typeof Accordion> = {
   component: Accordion,
   tags: ['autodocs'],
   args: {
      setCollapsed: fn()
   },
}

export default meta;

type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion: Story = {
   args: {
      title: "Collapsed Accordion",
      collapsed: true,
   }
};
export const OpenedAccordion: Story = {
   args: {
      title: "Opened Accordion",
      collapsed: false,
   },
};
const AccordionDemoHooks = () => {
   const [collapsed, setCollapsed] = React.useState<boolean>(false);

   const onChangeHandler = () => {
      setCollapsed(!collapsed);
   }

   return <Accordion title="Accordion DEMO" collapsed={collapsed} setCollapsed={onChangeHandler}/>
}

export const AccordionDemo: Story = {
   render: () => <AccordionDemoHooks />,
};

