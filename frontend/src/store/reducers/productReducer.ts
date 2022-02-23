import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";
// import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductState = {
    products: [],
    loading: true,
    error: null,
    page: 1,
    limit: 20,
};

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return {...state, loading: true, error: null};
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload};
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {...state, loading: false, error: action.payload};
        case ProductActionTypes.SET_TYPE_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
};

// const fetchProduct = createAsyncThunk({
//     "fetch/product",
//     () => {
//         return fetch(url);
//     }
// })

// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {
//         FETCH_PRODUCTS: (state) => {
//             state.loading = true;
//         },
//         FETCH_PRODUCTS_SUCCESS: (state, action) => {
//             state.loading = false;
//             state.products = action.payload;
//         },
//         FETCH_PRODUCTS_ERROR: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
            // extrareducer: builder => {
            //     builder
            //         .addCase(fetchProduct.pending, (state, action) => {
            //             state.loading = true;
            //         })
            //         .addCase(fetchProduct.fulfilled, (state, action) => {
            //             state.loading = false;
            //             state.products = action.payload;
            //         })
            //         .addCase(fetchProduct.rejected, (state, action) => {
            //             state.loading = false;
            //             state.error = action.payload;
            //         })
            // }

//     }
// })

// const {actions, reducer} = productsSlice;

// export const { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} = actions;
// export default reducer;


// const store = configureStore({
//     reducer: {productReducer},
//     middlewarre: getDefaultMiidleware => getDefaultMiidleware(),
//     devTools: process.env.NODE_ENV != "production"
// })
