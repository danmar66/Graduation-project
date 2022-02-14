import {ProductAction} from "./../../types/product";
import {Dispatch} from "react";
import {ProductActionTypes} from "../../types/product";
import axios from "axios";

export const fetchProducts = (page: number, limit: number) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS});
            const response = await axios.get(`http://localhost:5000/api/product/limit=${limit};page=${page}`);
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: "Error. Can't get products data",
            });
        }
    };
};

export function setProductPage(page: number): ProductAction {
    return {type: ProductActionTypes.SET_TYPE_PAGE, payload: page};
}
