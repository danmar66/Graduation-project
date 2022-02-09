import { oneProductReducer } from "./oneProductReducer";
import { productReducer } from "./productReducer";
import { basketReducer } from "./basketReducer";
import { typeReducer } from "./typeReducer";
import { tagReducer } from "./tagReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  oneProduct: oneProductReducer,
  product: productReducer,
  basket: basketReducer,
  type: typeReducer,
  tag: tagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
