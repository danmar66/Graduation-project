import {Dispatch} from "react";
import axios from "axios";
import {TagAction, TTagsAction} from "../../types/tag";

export const fetchTags = (page?: number) => {
    return async (dispatch: Dispatch<TagAction>) => {
        try {
            dispatch({type: TTagsAction.FETCH_TAGS});
            const response = await axios.get("http://localhost:5000/api/tag", {params: {page: page}});
            dispatch({type: TTagsAction.FETCH_TAGS_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({
                type: TTagsAction.FETCH_TAGS_ERROR,
                payload: "Error. Can't get types data",
            });
        }
    };
};
