import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginPage from "./componentes/pages/login/LoginPage.js";
import Register from "./componentes/pages/login/register.js"
import Home from './componentes/pages/Corpo/Corpo'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cadastropage" exact element={<Register/>}/> 
                <Route path="/loginpage" exact element ={<LoginPage/>}/> 
            </Routes>
        
        </BrowserRouter>        
    )
};

export default Rotas;