import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
   title: "Select",
   component: Select
}

export const WithValue = () => <Select value="2" onChange={action("Value changed")}
                                        items={[
                                           {value: "1", title: "Minsk"},
                                           {value: "2", title: "Гродно"},
                                           {value: "3", title: "Витебск"},
                                           {value: "4", title: "Могилев"},
                                        ]}/>

export const WithoutValue = () => <Select onChange={action("Value changed")}
                                       items={[
                                          {value: "1", title: "Minsk"},
                                          {value: "2", title: "Гродно"},
                                          {value: "3", title: "Витебск"},
                                          {value: "4", title: "Могилев"},
                                       ]}/>