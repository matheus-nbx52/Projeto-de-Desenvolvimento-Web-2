/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './register.css'
import Img from '../../static/imgs/img-01.png'
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import Loading from '../../componentes/Loading';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import nodemailer from 'nodemailer';

export default function CadastroPage() {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [userName,setUserName] = useState('')
    const [userImg,setUserImg] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsloading] = useState(false)
    const navigate = useNavigate()

    function handleChange(e) {
        const foto = e.target.files[0]
        setUserImg(foto)

    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(userName)
        let formErro = false

        if(!email){
            formErro = true
            toast.error('email vazio') 
        }
        if(!name){
            formErro = true
            toast.error('Nome vazio')
        }
        if(!sobrenome){
            formErro = true
            toast.error('Sobrenome vazio')
        }

        if(!isEmail(email)){
            formErro = true
            toast.error('email invalido')

        }
        if(!password){
            formErro = true
            toast.error('Campo senha vazio')
        }

        if (!formErro) {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('sobrenome', sobrenome)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('userName', userName)
            formData.append('userImg',userImg)
            try {
                setIsloading(true)
                const response = await axios.post(`${process.env.REACT_APP_USER_URL}/new`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                setIsloading(false)
                // send email aqui 
                // mandar um email com o nome eo sobrenome
                // let transporter = nodemailer.createTransport({
                //     service: "gmail",
                //     host: "smtp.google.com",
                //     port: 587,
                //     secure: true,
                //     auth: {
                //         user: "",
                //         pass: ""
                //     }
                // });
                
                // transporter.sendMail({
                //     from: " <>",
                //     to: email,
                //     subject: "teste",
                //     text: "",
                //     html: "você foi cadastrado com sucesso! bem-vindo ao nosso!"
                // }).then(message => {
                //     console.log(message);
                
                // }).catch(err => {
                //     console.log(err);
                // });

                
                toast.success('Cadastro realizado com sucesso')
                
                navigate('/loginpage')

            } catch (err) {
                console.log(err)
                setIsloading(false)

            }

        }


    }

    const [,] = useState('')
    return (
        <div>
          
        <Loading isLoading={isLoading}/>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={Img} alt="IMG"/>
                        </div>

                        <form onSubmit={(e)=>{handleSubmit(e)}} method='post'    className="login100-form validate-form ">
                            <span className="login100-form-title">
                                cadastre-se
                            </span>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Email"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="name" onChange={(e)=> setName(e.target.value)} value={name} placeholder="Nome"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="sobrenome" onChange={(e)=> setSobrenome(e.target.value)} value={sobrenome} placeholder="sobrenome"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-male" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="text" name="userName" onChange={(e)=> setUserName(e.target.value)} value={userName} placeholder="User Name"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                    </span>
                            </div>
                            <div className="wrap-input100 validate-input send-file" data-validate="Password is required">
                                <input className="input100" type="file" onChange={(e) => handleChange(e)} name="userImg" />
                                    {/* <span className="focus-input100"></span> */}
                                    {/* <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span> */}
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Password"/>
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
        </div>
    )
}