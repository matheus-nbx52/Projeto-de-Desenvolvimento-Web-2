import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Topo from "./componentes/pages/Topo/Topo.js";
import LoginPage from "./componentes/pages/login/LoginPage.js";
import Register from "./componentes/pages/login/register.js"

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Topo/>}/>
                <Route path="/cadastropage" exact element={<Register/>}/>
                <Route path="/loginpage" exact element ={<LoginPage/>}/> 
            </Routes>
        
        </BrowserRouter>        
    )
};

export default Rotas;