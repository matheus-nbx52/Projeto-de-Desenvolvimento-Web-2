import '../UserPage/UserPage.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function UserPage() {
    const [UserImg, setUserImg] = useState('')
    const [UserName, setName] = useState('')
    const [UserPassword, setPassword] = useState('')
    const [UserEmail, setEmail] = useState('')
    const [UserSobrenome, setSobrenome] = useState('')
    const [UserUserName, setUserName] = useState('')
    const [idUser,setIdUser] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        VerificaLogado()
    },[])
    
    function VerificaLogado() {
        const data = localStorage.getItem('userToken')
        if (!data) return navigate('/loginpage')
        const userId = JSON.parse(data).userId
        if(!userId) return navigate('/loginpage')
        setIdUser(userId)
        // console.log(userId)
        if (data) {
            axios.get(`http://localhost:3030/user/${userId}`).then((userApi) => {
                setUserImg(userApi.data.user.image)
                setEmail(userApi.data.user.email)
                setName(userApi.data.user.name)
                setPassword(userApi.data.user.password)
                setSobrenome(userApi.data.user.sobrenome)
                setUserName(userApi.data.user.userName)
            }).catch((e) => {
                navigate('/loginpage')
                console.log(e)
            })
        } else {
            setUserImg('')
        }
    }
    
    function logOut(){
        localStorage.setItem('userToken',false)
        navigate('/')
        
    }
    
    
   
    return (
        <>
            <header id="topo">
                <nav className="container" id='Userbar'>
                    <a href="/"><i className="fas fa-arrow-alt-circle-left"></i></a>
                    <i className="fas fa-door-open" onClick={logOut}></i>
                </nav>
            </header>
            
            <main className="container">
                <form action={`http://localhost:3030/update/${idUser}`} method="post" id='userForm' enctype="multipart/form-data">
                    <label for="imageInput" >
                        <img id="user-img" src={`http://localhost:3030/upload/${UserImg}`} for="image" alt="" />
                    </label>
                    <input id="imageInput" type="file" name="userImg" />
                    <input type="text" name="name" value={UserName} onChange={(e)=>setName(e.target.value)} placeholder="Nome" />
                    <input type="text" name="sobrenome" value={UserSobrenome} onChange={(e)=>setSobrenome(e.target.value)} placeholder="Sobrenome" />
                    <input type="text" name="email" value={UserEmail} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                    <input type="text" name="userName" value={UserUserName} onChange={(e)=>setUserName(e.target.value)} placeholder="username" />
                    <input type="password" name="New password"  placeholder="password" autoComplete='true'/>
                    <input type="submit" value='Salvar' />
                </form>


            </main>
        </>
    )
}