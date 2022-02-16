import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes";

function AppRouter() {
    const isAuth = true;

    return (
        <Routes>
            {/*<Route path="*" element={<Navigate replace to="/" />} />*/}
            {isAuth &&
                authRoutes.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
            {publicRoutes.map(({path, element}) => (
                <Route key={path} path={path} element={element}/>
            ))}
        </Routes>
    );
}

export default AppRouter;
