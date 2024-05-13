import {Meta, StoryObj} from "@storybook/react";
import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";
import {fn} from "@storybook/test";


const meta = {
   tags: ['autodocs'],
   component: Rating,
   args: {
      value: 3,
      setValue: fn()
   },
   argTypes: {
      value: {
         control: 'select',
         options: [0, 1, 2, 3, 4, 5],
         type: 'number'
      }
   }
} satisfies Meta<typeof Rating> ;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyRating: Story = {
   args: {
      value: 0
   }
}

export const Rating_1: Story = {
   args: {
      value: 1
   }
}
export const Rating_2: Story = {
   args: {
      value: 2
   }
}
export const Rating_3: Story = {
   args: {
      value: 3
   }
}
export const Rating_4: Story = {
   args: {
      value: 4
   }
}
export const Rating_5: Story = {
   args: {
      value: 5
   }
}


const RatingWithHooks = () => {
   const [value, setValue] = useState<RatingValueType>(0)

   return <Rating value={value} setValue={setValue}/>
}

export const RatingDemo = {
   render: () => <RatingWithHooks />,
} satisfies Story;