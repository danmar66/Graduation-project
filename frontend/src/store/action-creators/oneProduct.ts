import { Dispatch } from "react";
import { OneProductAction, OneProductActionTypes } from "../../types/oneProduct";
import axios from "axios";

export const fetchOneProduct = (slug: string = "") => {
  return async (dispatch: Dispatch<OneProductAction>) => {
    try {
      dispatch({ type: OneProductActionTypes.FETCH_ONE_PRODUCT });
      const response = await axios.get(`http://localhost:5000/api/product/slug/${slug}`);
      dispatch({ type: OneProductActionTypes.FETCH_ONE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: OneProductActionTypes.FETCH_ONE_PRODUCT_ERROR,
        payload: "Error. Can't get product data",
      });
    }
  };
};
