import {BasketAction, BasketActionTypes, BasketState} from "../../types/basket";

const initialState: BasketState = {
    basketItems: [],
};

export const basketReducer = (state = initialState, action: BasketAction) => {
    switch (action.type) {
        case BasketActionTypes.ADD_TO_BASKET:
            return {}
        case BasketActionTypes.DELETE_FROM_BASKET:
            return {}
        case BasketActionTypes.ADJUST_QTY:
            return {}
        default:
            return state
    }
}

// export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
//   switch (action.type) {
//     case BasketActionTypes.ADD_TO_BASKET:
//       const item = action.payload;
//
//       const existItem = state.basketItems.find((el) => el.id === item.id);
//
//       if (existItem) {
//         return {
//           ...state,
//           basketItems: state.basketItems.map((el) => (el.id === existItem.id ? item : el)),
//         };
//       } else {
//         return {
//           ...state,
//           basketItems: [...state.basketItems, item],
//         };
//       }
//     case BasketActionTypes.DELETE_FROM_BASKET:
//       return {
//         ...state,
//         basketItems: state.basketItems.filter((el) => el.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
