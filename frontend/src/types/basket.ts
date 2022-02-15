export interface BasketState {
    basketItems: any[];
}

export enum BasketActionTypes {
    ADD_TO_BASKET = "ADD_TO_BASKET",
    DELETE_FROM_BASKET = "DELETE_FROM_BASKET",
    ERROR_BASKET = "ERROR_BASKET",
    ADJUST_QTY = "ADJUST_QTY"
}

interface AddToBasketAction {
    type: BasketActionTypes.ADD_TO_BASKET;
    payload: any; // @todo убрать any
}

interface DeleteFromBasketAction {
    type: BasketActionTypes.DELETE_FROM_BASKET;
    payload: any; // @todo убрать any
}

interface AdjustQtyAction {
    type: BasketActionTypes.ADJUST_QTY;
    payload: string;
}

interface BasketErrorAction {
    type: BasketActionTypes.ERROR_BASKET;
    payload: string;
}

export type BasketAction = AddToBasketAction | DeleteFromBasketAction | BasketErrorAction | AdjustQtyAction;
