export interface OneProductState {
  product: any;
  loading: boolean;
  error: null | string;
}

export enum OneProductActionTypes {
  FETCH_ONE_PRODUCT = "FETCH_ONE_PRODUCT",
  FETCH_ONE_PRODUCT_SUCCESS = "FETCH_ONE_PRODUCT_SUCCESS",
  FETCH_ONE_PRODUCT_ERROR = "FETCH_ONE_PRODUCT_ERROR",
}

interface FetchOneProductAction {
  type: OneProductActionTypes.FETCH_ONE_PRODUCT;
}

interface FetchOneProductSuccessAction {
  type: OneProductActionTypes.FETCH_ONE_PRODUCT_SUCCESS;
  payload: any;
}

interface FetchOneProductErrorAction {
  type: OneProductActionTypes.FETCH_ONE_PRODUCT_ERROR;
  payload: string;
}

export type OneProductAction =
  | FetchOneProductAction
  | FetchOneProductErrorAction
  | FetchOneProductSuccessAction;
