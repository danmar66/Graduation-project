export interface ProductState {
    products: any;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    SET_TYPE_PAGE = "SET_TYPE_PAGE",
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any[];
}

interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}

interface SetTypePage {
    type: ProductActionTypes.SET_TYPE_PAGE;
    payload: number;
}

export type ProductAction =
    | FetchProductAction
    | FetchProductErrorAction
    | FetchProductSuccessAction
    | SetTypePage;
