import { TypeState, TypeAction, TTypesAction } from "../../types/type";

const initialState: TypeState = {
  types: [],
  error: null,
  loading: false,
};

export const typeReducer = (state = initialState, action: TypeAction): TypeState => {
  switch (action.type) {
    case TTypesAction.FETCH_TYPES:
      return { ...state, loading: true };
    case TTypesAction.FETCH_TYPES_SUCCESS:
      return { ...state, loading: false, types: action.payload };
    case TTypesAction.FETCH_TYPES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
