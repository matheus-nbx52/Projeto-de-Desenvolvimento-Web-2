import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Topo from "./componentes/Topo.js";
import LoginPage from "./componentes/pages/LoginPage.js";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Topo/>}/>
                <Route path="/loginpage" exact element ={<LoginPage/>}/> 
            </Routes>
        
        </BrowserRouter>        
    )
};

export default Rotas;