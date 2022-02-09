import * as OneProductActionCreators from "./oneProduct";
import * as ProductActionCreators from "./product";
import * as BasketActionCreators from "./basket";
import * as TypeActionCreators from "./type";
import * as TagActionCreators from "./tag";

export default {
  ...OneProductActionCreators,
  ...ProductActionCreators,
  ...BasketActionCreators,
  ...TypeActionCreators,
  ...TagActionCreators,
};
