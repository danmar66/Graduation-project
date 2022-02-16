import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import Catalog from "../pages/Catalog";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    HOME_PAGE,
    CATALOG_ROUTE
} from "../utils/consts";

type RouterType = {
    path: string;
    element: React.ReactNode;
}

export const authRoutes: RouterType[] = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
    }
];

export const publicRoutes = [
    {
        path: HOME_PAGE,
        element: <HomePage/>,
    },
    {
        path: CATALOG_ROUTE,
        element: <Catalog/>,
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>,
    },
    {
        path: PRODUCT_ROUTE + "/:slug",
        element: <ProductPage/>,
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>,
    },
];
