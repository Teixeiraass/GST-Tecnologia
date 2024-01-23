import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "../screen/HomePage";
import SolucoesScreen from "../screen/SolucoesScreen";
import ContactScreen from "../screen/ContactSreen";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/solucoes" element={ <SolucoesScreen/> }/>
                <Route path="/contato" element={ <ContactScreen/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;