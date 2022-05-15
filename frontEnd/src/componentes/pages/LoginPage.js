/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './CSS Pages/loginPage.css'

export default function LoginPage() {

    return (
        <>
            <section>
                <div class="form">
                    <ul class="tab-group">
                        <li class="tab-active">
                            <a href="#signup">Cadastrar-se</a>
                        </li>
                        <li class='tab'>
                            <a href="#login">Entrar</a> 
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="signup">
                            <h1> Cadastre-se grátis</h1>

                            <form action="/" method="post">
                            <div class="top-row">
                                <div class="field-wrap">
                                    <label>
                                        Primeiro Nome <span class="req">
                                            *
                                        </span>
                                    </label>
                                    <input type="text" required autocomplete="off"/>
                                </div>
                            </div>
                            <div class="field-wrap">
                                <label>
                                    Email<span class="req">
                                            *
                                        </span>
                                </label>
                                    <input type="email" required autocomplete="off"/>
                            </div>
                            <div class="field-wrap">
                                    <label>
                                        Digite uma senha <span class="req">
                                            *
                                        </span>
                                    </label>
                                    <input type="password" required autocomplete="off"/>
                                </div>
                                <button type="submit" class="button button block">Começar</button>
                            </form>
                        </div>

                        <div id="login">
                            <h1>Bem-vindo de volta</h1>

                            <form action="/" method="post">
                            <div class="field-wrap">
                                <label>
                                    Email<span class="req">
                                            *
                                        </span>
                                </label>
                                    <input type="email" required autocomplete="off"/>
                            </div>
                            <div class="field-wrap">
                                    <label>
                                        Sua senha <span class="req">
                                            *
                                        </span>
                                    </label>
                                    <input type="password" required autocomplete="off"/>
                                </div>
                                <p class="forgot"><a href="#">Esqueceu sua senha?</a></p>
                                <button class="button button-block">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <script>
                    
                </script>

            </section>

        </>
    )
}

