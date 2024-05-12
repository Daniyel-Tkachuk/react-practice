import type { Meta } from '@storybook/react';

import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
   component: Accordion,
};

export default meta;

export const CollapsedAccordion = () => {
   return   <div>collapsed</div>
}

export const OpenAccordion = () => {
   return   <div>open</div>
}

