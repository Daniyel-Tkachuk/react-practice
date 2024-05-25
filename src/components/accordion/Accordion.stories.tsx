import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import React from "react";
import {fn} from "@storybook/test";
import {action} from "@storybook/addon-actions";


const meta: Meta<typeof Accordion> = {
   component: Accordion,
   tags: ['autodocs'],
   args: {
      items: [
         {title: "Даниель", value: 1},
         {title: "Виктория", value: 2},
         {title: "Захар", value: 3}
      ],
      setCollapsed: fn(),
      onClick: fn(),
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

   const onClickHandler = (value: any) => {
      action(`user with id`)(value);
   }

   return <Accordion title="Accordion DEMO"
                     items={[
                        {title: "Даниель", value: 1},
                        {title: "Виктория", value: 2},
                        {title: "Захар", value: 3}
                     ]}
                     collapsed={collapsed}
                     setCollapsed={onChangeHandler}
                     onClick={onClickHandler}
   />
}

export const AccordionDemo: Story = {
   render: () => <AccordionDemoHooks/>,
};

