/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './register.css'
import Img from '../../static/imgs/img-01.png'


export default function CadastroPage() {
    return (
        <>
          
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={Img} alt="IMG"/>
                        </div>

                        <form method='post' action='http://localhost:3030/new' className="login100-form validate-form " enctype="multipart/form-data">
                            <span className="login100-form-title">
                                cadastre-se
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="name" placeholder="Nome"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="text" name="sobrenome" placeholder="sobrenome"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-male" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="text" name="userName" placeholder="User Name"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input send-file" data-validate="Password is required">
                                <input className="input100" type="file" name="userImg" />
                                    {/* <span className="focus-input100"></span> */}
                                    {/* <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span> */}
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    cadastrar
                                </button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}