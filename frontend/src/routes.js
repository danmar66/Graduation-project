import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  // {
  //   path: SHOP_ROUTE,
  //   element: <Shop />,
  // },
  // {
  //   path: LOGIN_ROUTE,
  //   element: <Auth />,
  // },
  // {
  //   path: REGISTRATION_ROUTE,
  //   element: <Auth />,
  // },
  // {
  //   path: PRODUCT_ROUTE + "/:id",
  //   element: <ProductPage />,
  // },
  // {
  //   path: BASKET_ROUTE,
  //   element: <Basket />,
  // },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: PRODUCT_ROUTE + "/:slug",
    element: <ProductPage />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];
