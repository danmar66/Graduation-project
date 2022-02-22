import {TagState, TagAction, TTagsAction} from "../../types/tag";

const initialState: TagState = {
    tags: {},
    error: null,
    loading: false,
};

export const tagReducer = (state = initialState, action: TagAction): TagState => {
    switch (action.type) {
        case TTagsAction.FETCH_TAGS:
            return {...state, loading: true};
        case TTagsAction.FETCH_TAGS_SUCCESS:
            return {...state, loading: false, tags: action.payload};
        case TTagsAction.FETCH_TAGS_ERROR:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};
