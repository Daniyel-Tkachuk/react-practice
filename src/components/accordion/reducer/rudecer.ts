export const reducerAccordion = (state: boolean, action: any): boolean => {
   switch (action.type) {
      case "CHANGE-COLLAPSED": {
         return {
            ...state,
            collapsed: !action.collapsed
         }
      } default: {
         return state;
      }
   }
}

