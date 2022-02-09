import { OneProductAction, OneProductActionTypes, OneProductState } from "../../types/oneProduct";

const initialState: OneProductState = {
  product: {},
  loading: false,
  error: null,
};

export const oneProductReducer = (state = initialState, action: OneProductAction): OneProductState => {
  switch (action.type) {
    case OneProductActionTypes.FETCH_ONE_PRODUCT:
      return { ...state, loading: true, error: null };
    case OneProductActionTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };
    case OneProductActionTypes.FETCH_ONE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
