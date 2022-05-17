/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../login/loginPage.css'
import Img from '../../imgs/img-01.png'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const navigate = useNavigate();


    async function Login(e){
        e.preventDefault();
        await axios.post('http://localhost:3030/login',{email:email,password:password}).then((e)=>{
            localStorage.setItem('userToken', JSON.stringify({acessToken:e.data.token,userId:e.data.userId}))
            return navigate("/");
            // ir no node e fazer retornar o user id eo token
        }).catch((e)=>{
            alert('Erro ao logar')  
            console.log(e)
        })
        console.log(email);
        console.log(password);
    }
    

    return (
        <>
          
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={Img} alt="IMG"/>
                        </div>

                        <form className="login100-form validate-form" onSubmit={(e)=>Login(e)}>
                            <span className="login100-form-title">
                                Member Login
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} name="email" placeholder="Email"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" placeholder="Password"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Entrar
                                </button>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="/cadastropage">
                                    Crie sua conta
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}