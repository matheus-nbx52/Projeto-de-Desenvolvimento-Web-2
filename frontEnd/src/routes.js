import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginPage from "./componentes/pages/login/LoginPage.js";
import Register from "./componentes/pages/login/register.js"
import Home from './componentes/pages/Corpo/Corpo'
import UserPage from './componentes/pages/UserPage/UserPage.js'
import AddVideo from "./componentes/pages/addVideo/Addvideo.js";
import VideoPlayer from './componentes/pages/VideoPlayer/VideoPlayer';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>      
                <Route path="/" exact element={<Home/>}/>
                <Route path="/cadastropage" exact element={<Register/>}/> 
                <Route path="/loginpage" exact element ={<LoginPage/>}/> 
                <Route path="/userpage" exact element ={<UserPage/>}/>
                <Route path="/addvideo" exact element ={<AddVideo/>}/>
                <Route path="/videoplayer/:videoid" exact element={<VideoPlayer/>}/>
            </Routes>
        </BrowserRouter>        
    )
};

export default Rotas;