import {BasketAction, BasketActionTypes} from "../../types/basket";

export const addToBasket = (data: any) => {
    return {
        type: BasketActionTypes.ADD_TO_BASKET,
        payload: data
    }
}

export const deleteFromBasket = (id: string) => {
    return {
        type: BasketActionTypes.DELETE_FROM_BASKET,
        payload: {
            id
        }
    }
}

export const adjustQty = (id: string, value: number) => {
    return {
        type: BasketActionTypes.ADJUST_QTY,
        payload: {
            id,
            qty: value
        }
    }
}

// export const deleteFromBasket =
//   (id: string) => (dispatch: Dispatch<BasketAction>, getState: any) => {
//     dispatch({
//       type: BasketActionTypes.DELETE_FROM_BASKET,
//       payload: id,
//     });
//   };
