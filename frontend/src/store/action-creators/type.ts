import { Dispatch } from "react";
import axios from "axios";
import { TTypesAction, TypeAction } from "../../types/type";

export const fetchTypes = () => {
  return async (dispatch: Dispatch<TypeAction>) => {
    try {
      dispatch({ type: TTypesAction.FETCH_TYPES });
      const response = await axios.get("http://localhost:5000/api/tag_type");
      dispatch({ type: TTypesAction.FETCH_TYPES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: TTypesAction.FETCH_TYPES_ERROR,
        payload: "Error. Can't get types data",
      });
    }
  };
};
