import {FilterState, FilterAction, FilterActionTypes} from "../../types/filter"

const initialState: FilterState = {
    filterTags: [],
}

export const filterReducer = (state = initialState, action: FilterAction) => {
    switch (action.type) {
        case FilterActionTypes.ADD_TAG_TO_FILTER:
            return {...state, filterTags: [state.filterTags, action.payload]}
        case FilterActionTypes.DELETE_TAG_FROM_FILTER:
            return {...state}
        default:
            return state
    }
}