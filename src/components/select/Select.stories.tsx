import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";


const meta = {
   tags: ['autodocs'],
   component: Select,
   args: {
      value: "2",
      items: [
         {value: "1", title: "Minsk"},
         {value: "2", title: "Гродно"},
         {value: "3", title: "Витебск"},
         {value: "4", title: "Могилев"},
      ],
      onChange: fn()
   }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;


export const WithValue = {
   render: function Render(args) {
      const [value, setValue] = useState("2");

      function onChangeHandler(newValue: string) {
         setValue(newValue);
         action('select-value')(newValue);
      }

      return <Select {...args} onChange={onChangeHandler} value={value}/>
   },
} satisfies Story;


export const WithoutValue = {
   args: {
     value: ""
   },
   render: (args) => {
      const [value, setValue] = useState(null);

      const onChangeHandler = (newValue: any) => {
         setValue(newValue);
         action('select-value')(newValue);
      }

      return <Select {...args} onChange={onChangeHandler} value={value}/>
   }
} satisfies Story;