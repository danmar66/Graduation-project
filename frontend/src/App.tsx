import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./router/AppRouter";
import {store} from "./store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {/*
        @todo добавить админ юзер провайдер (если есть токен в сторадж пытаться получить пользователя и записать в редакс стор)
      */}
                <NavBar/>
                <AppRouter/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
