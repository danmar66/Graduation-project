import {Dispatch} from "react";
import axios from "axios";
import {TTypesAction, TypeAction} from "../../types/type";

export const fetchTypes = (page?: number) => {
    return async (dispatch: Dispatch<TypeAction>) => {
        try {
            dispatch({type: TTypesAction.FETCH_TYPES});
            const response = await axios.get("http://localhost:5000/api/tag_type", {params: {page: page}});
            dispatch({type: TTypesAction.FETCH_TYPES_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({
                type: TTypesAction.FETCH_TYPES_ERROR,
                payload: "Error. Can't get types data",
            });
        }
    };
};

export const deleteType = (id: string) => {
    return (dispatch: Dispatch<TypeAction>) => {
        dispatch({type: TTypesAction.DELETE_TYPE, payload: id})
    };
};

