import { ProductAction, ProductActionTypes, ProductState } from "../../types/product";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  page: 1,
  limit: 20,
};

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return { ...state, loading: true, error: null };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ProductActionTypes.SET_TYPE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
