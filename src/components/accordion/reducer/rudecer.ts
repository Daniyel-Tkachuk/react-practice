export type StateType = {
   collapsed: boolean
}

export const reducerAccordion = (state: StateType, action: ActionsType): StateType => {
   switch (action.type) {
      case "CHANGE-COLLAPSED": {
         return {
            ...state,
            collapsed: !state.collapsed
         }
      } default: {
         return state;
      }
   }
}

type ChangeCollapsedType = ReturnType<typeof changeCollapsed>;

export const changeCollapsed = () => {
   return {
      type: "CHANGE-COLLAPSED",
   } as const;
};

export type ActionsType = ChangeCollapsedType;