export interface TypeState {
  types: any[];
  loading: boolean;
  error: null | string;
}

export enum TTypesAction {
  FETCH_TYPES = "FETCH_TYPES",
  FETCH_TYPES_SUCCESS = "FETCH_TYPES_SUCCESS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
  SET_TYPE_PAGE = "SET_TYPE_PAGE", // для изменения текущей страницы
}

interface FetchTypeAction {
  type: TTypesAction.FETCH_TYPES;
}

interface FetchTypeSuccessAction {
  type: TTypesAction.FETCH_TYPES_SUCCESS;
  payload: any[];
}
interface FetchTypeErrorAction {
  type: TTypesAction.FETCH_TYPES_ERROR;
  payload: string;
}

export type TypeAction = FetchTypeAction | FetchTypeSuccessAction | FetchTypeErrorAction;

// задать интерфейс для payload
