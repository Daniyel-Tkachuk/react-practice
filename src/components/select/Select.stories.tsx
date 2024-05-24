import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {Meta, StoryObj} from "@storybook/react";
import {useArgs} from '@storybook/preview-api';
import {fn} from "@storybook/test";

/*items={}*/

const meta = {
   tags: ['autodocs'],
   component: Select,
   args: {
      value: "2",
      onChange: action('asd'),
      items: []
   }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;


export const WithValue = {
   args: {
      items: [
         {value: "1", title: "Minsk"},
         {value: "2", title: "Гродно"},
         {value: "3", title: "Витебск"},
         {value: "4", title: "Могилев"},
      ],
   },
   render: function Render(args) {
      const [{ value }, setValue] = useArgs();

      function onChange(newValue: any) {
         setValue({ value: newValue });
         action('select-value')(newValue)
      }

      return <Select {...args} onChange={onChange} value={value}/>
   },
} satisfies Story;








export const WithoutValue = () => <Select onChange={action("Value changed")}
                                          items={[
                                             {value: "1", title: "Minsk"},
                                             {value: "2", title: "Гродно"},
                                             {value: "3", title: "Витебск"},
                                             {value: "4", title: "Могилев"},
                                          ]}/>