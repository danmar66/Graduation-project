import {Dispatch} from "react";
import {FilterAction, FilterActionTypes} from "../../types/filter";

export const addTagToFilter = (tag: string) => {
    return async (dispatch: Dispatch<FilterAction>) => {
        try {
            dispatch({type: FilterActionTypes.ADD_TAG_TO_FILTER, payload: tag});
        } catch (error) {
            console.log(error)
        }
    }
}
