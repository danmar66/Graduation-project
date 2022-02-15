export interface FilterState {
    filterTags: [];
}

export enum FilterActionTypes {
    ADD_TAG_TO_FILTER = "ADD_TAG_TO_FILTER",
    DELETE_TAG_FROM_FILTER = "DELETE_TAG_FROM_FILTER"
}

interface AddTagToFilterAction {
    type: FilterActionTypes.ADD_TAG_TO_FILTER;
    payload: any
}

interface DeleteTagFromFilterAction {
    type: FilterActionTypes.DELETE_TAG_FROM_FILTER;
}

export type FilterAction = AddTagToFilterAction | DeleteTagFromFilterAction;
