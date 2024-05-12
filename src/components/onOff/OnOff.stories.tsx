import {Meta, StoryObj} from "@storybook/react";
import {OnOff} from "./OnOff";
import {fn} from "@storybook/test";
import React from "react";


const meta: Meta<typeof OnOff> = {
   component: OnOff,
   argTypes: {
      setIncludeValue: {action: fn()}
   }
}

export default meta;

type Story = StoryObj<typeof OnOff>;

export const On: Story = {
   args: {
      includeValue: true
   }
};

export const Off: Story = {
   args: {
      includeValue: false
   }
};


const OnOffStory = () => {
   const [includeValue, setIncludeValue] = React.useState<boolean>(false);

   return <OnOff includeValue={includeValue} setIncludeValue={setIncludeValue}/>
}

export const OnnOffDemo: Story = {
   render: () => <OnOffStory/>
}