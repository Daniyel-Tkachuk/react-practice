type StateType = {
   collapsed: boolean
}

export const reducerAccordion = (state: StateType, action: ActionsType): StateType => {
   switch (action.type) {
      case "CHANGE-COLLAPSED": {
         return {
            ...state,
            collapsed: !action.payload.collapsed
         }
      } default: {
         return state;
      }
   }
}

type ChangeCollapsedType = ReturnType<typeof changeCollapsed>;

export const changeCollapsed = (collapsed: boolean) => {
   return {
      type: "CHANGE-COLLAPSED",
      payload: {
         collapsed
      }
   } as const;
};

type ActionsType = ChangeCollapsedType;