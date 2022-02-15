import * as OneProductActionCreators from "./oneProduct";
import * as ProductActionCreators from "./product";
import * as BasketActionCreators from "./basket";
import * as FilterActionCreators from "./filter"
import * as TypeActionCreators from "./type";
import * as TagActionCreators from "./tag";

export default {
    ...OneProductActionCreators,
    ...ProductActionCreators,
    ...BasketActionCreators,
    ...FilterActionCreators,
    ...TypeActionCreators,
    ...TagActionCreators,
};
