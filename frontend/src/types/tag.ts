export interface TagState {
    tags: any[];
    loading: boolean;
    error: null | string;
}

export enum TTagsAction {
    FETCH_TAGS = "FETCH_TAGS",
    FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS",
    FETCH_TAGS_ERROR = "FETCH_TAGS_ERROR",
}

interface FetchTagAction {
    type: TTagsAction.FETCH_TAGS;
}

interface FetchTagSuccessAction {
    type: TTagsAction.FETCH_TAGS_SUCCESS;
    payload: any[];
}

interface FetchTagErrorAction {
    type: TTagsAction.FETCH_TAGS_ERROR;
    payload: string;
}

export type  TagAction = FetchTagAction | FetchTagSuccessAction | FetchTagErrorAction;

// задать интерфейс для payload
