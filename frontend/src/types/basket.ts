export interface BasketState {
  basketItems: any[];
}

export enum BasketActionTypes {
  ADD_TO_BASKET = "ADD_TO_BASKET",
  DELETE_FROM_BASKET = "DELETE_FROM_BASKET",
  ERROR_BASKET = "ERROR_BASKET",
}

interface AddToBasketAction {
  type: BasketActionTypes.ADD_TO_BASKET;
  payload: any; // @todo убрать any
}

interface DeleteFromBasketAction {
  type: BasketActionTypes.DELETE_FROM_BASKET;
  payload: any; // @todo убрать any
}

interface BasketErrorAction {
  type: BasketActionTypes.ERROR_BASKET;
  payload: string;
}

export type BasketAction = AddToBasketAction | DeleteFromBasketAction | BasketErrorAction;
