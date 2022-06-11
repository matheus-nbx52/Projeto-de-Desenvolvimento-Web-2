import React from "react";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import LoginPage from "./pages/login/LoginPage.js";
import Register from "./pages/RegisterPage/register.js"
import Home from './pages/Corpo/Corpo'
import UserPage from './pages/UserPage/UserPage.js'
import AddVideo from "./pages/addVideo/Addvideo.js";
import Page404 from "./pages/Page404"
import { Navigate } from "react-router-dom";
// import VideoPlayer from './static/pages/VideoPlayer/VideoPlayer';

// autorização 
function PrivateRoute({ children, redirectTo }) {
    const isAuthenticate = false;

    return isAuthenticate ? children : <Navigate to={redirectTo} />;
}

// modelo rota privada

{/* <PrivateRoute redirectTo="/login">
    <h1>Pagina de usuarios aqui - privada </h1>
</PrivateRoute> */}




function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cadastropage" exact element={<Register />} />
                <Route path="/loginpage" exact element={<LoginPage />} />

                {/* <Route path="/userpage" exact element={<UserPage />} /> */}

                <Route path="/addvideo" exact element={<PrivateRoute redirectTo="/loginpage"><AddVideo/></PrivateRoute>} />

                <Route path="/userpage" element={<PrivateRoute redirectTo="/loginpage"><UserPage /></PrivateRoute>}></Route>





                <Route path="*" element={<Page404 />} />
                {/* <Route path="/videoplayer/:videoid" exact element={<VideoPlayer/>}/> */}
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;