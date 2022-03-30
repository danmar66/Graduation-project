import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {PublicLayout} from "./layouts/PublicLayout";
import {AdminLayout} from "./layouts/AdminLayout";

import Basket from "../pages/Basket";
import Catalog from "../pages/Catalog";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

import Admin from "../pages/Admin"
import Test from "../pages/Test";
import Auth from "../pages/Auth";

import TagsTable from "../components/AdminPanel/AdminPanelTables/TagsTable";
import TypesTable from "../components/AdminPanel/AdminPanelTables/TypesTable";
import AdminsTable from "../components/AdminPanel/AdminPanelTables/AdminsTable";
import OrdersTable from "../components/AdminPanel/AdminPanelTables/OrdersTable";

import ProductsTable from "../components/AdminPanel/AdminPanelTables/ProductsTable";
import CreateTagPage from "../components/AdminPanel/createPages/CreateTagPage";
import CreateTypePage from "../components/AdminPanel/createPages/CreateTypePage";
import CreateAdminPage from "../components/AdminPanel/createPages/CreateAdminPage";

import CreateProductPage from "../components/AdminPanel/createPages/CreateProductPage";
import TagEditPage from "../components/AdminPanel/editPages/TagEditPage";
import TypeEditPage from "../components/AdminPanel/editPages/TypeEditPage";
import AdminEditPage from "../components/AdminPanel/editPages/AdminEditPage";
import ProductEditPage from "../components/AdminPanel/editPages/ProductEditPage";

function AppRouter() {
    const isAuth = () => {
        const token = window.localStorage.getItem('authToken')
        console.log('token ROUTER ', token)
        return token
        // return false
    };

    const AdminOutlet = () => {
        const auth = isAuth();
        console.log('auth ', auth)
        return auth ? <AdminLayout/> : <Navigate to='/auth'/>
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='catalog' element={<Catalog/>}/>
                    <Route path='product/:slug' element={<ProductPage/>}/>
                    <Route path='basket' element={<Basket/>}/>
                </Route>


                <Route path='/admin' element={<AdminOutlet/>}>
                    <Route index element={<Admin/>}/>

                    <Route path='test' element={<Test/>}/>

                    <Route path='tags' element={<TagsTable/>}/>
                    <Route path='types' element={<TypesTable/>}/>
                    <Route path='admins' element={<AdminsTable/>}/>
                    <Route path='orders' element={<OrdersTable/>}/>
                    <Route path='products' element={<ProductsTable/>}/>

                    <Route path='tags/new' element={<CreateTagPage/>}/>
                    <Route path='types/new' element={<CreateTypePage/>}/>
                    <Route path='admins/new' element={<CreateAdminPage/>}/>
                    <Route path='products/new' element={<CreateProductPage/>}/>

                    <Route path='tags/edit/:id' element={<TagEditPage/>}/>
                    <Route path='types/edit/:id' element={<TypeEditPage/>}/>
                    <Route path='admins/edit/:id' element={<AdminEditPage/>}/>
                    <Route path='products/edit/:id' element={<ProductEditPage/>}/>
                </Route>
                <Route path='/auth' element={<Auth/>}/>
            </Routes>
        </>
    )
}

export default AppRouter;
