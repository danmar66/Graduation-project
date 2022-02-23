import React from "react";
import {Route, Routes} from "react-router-dom";
import {PublicLayout} from "./layouts/PublicLayout";
import {AdminLayout} from "./layouts/AdminLayout";
import HomePage from "../pages/HomePage";
import Catalog from "../pages/Catalog";
import ProductPage from "../pages/ProductPage";
import Basket from "../pages/Basket";

import Admin from "../pages/Admin"
import Test from "../pages/Test";
import TagsTable from "../components/AdminPanelTables/TagsTable";
import Auth from "../pages/Auth";

function AppRouter() {
    const isAuth = true;

    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='catalog' element={<Catalog/>}/>
                    <Route path='product' element={<ProductPage/>}/>
                    <Route path='basket' element={<Basket/>}/>
                </Route>
                <Route path='/admin' element={<AdminLayout/>}>
                    <Route index element={<Admin/>}/>
                    <Route path='test' element={<Test/>}/>
                    <Route path='tags' element={<TagsTable/>}/>
                </Route>
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </>
    );
}

export default AppRouter;
