import "./UserPage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "../../store/modules/auth/actions.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../../componentes/Loading";
import { toast } from "react-toastify";
import { isEmail } from "validator";

export default function UserPage() {
  const [UserImg, setUserImg] = useState("");
  const [UserName, setName] = useState("");
  const [UserPassword, setPassword] = useState("");
  const userId = useSelector((state) => state.auth.userId);
  const userToken = useSelector((state) => state.auth.token);
  const [UserEmail, setEmail] = useState("");
  const [UserSobrenome, setSobrenome] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [UserUserName, setUserName] = useState("");
  const [UserPhoto, setUserPhoto] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.loginFail());
    navigate("/");
  };

  async function UserDetails() {
    setIsloading(true);
    await axios
      .get(`http://localhost:3030/user/${userId}`)
      .then((userApi) => {
        setUserImg(`http://localhost:3030/upload/${userApi.data.user.image}`);
        setEmail(userApi.data.user.email);
        setName(userApi.data.user.name);
        setSobrenome(userApi.data.user.sobrenome);
        setUserName(userApi.data.user.userName);
        setIsloading(false);
      })
      .catch((e) => {
        setIsloading(false);
        navigate("/loginpage");
        console.log(e);
      });
  }

  useEffect(() => {
    UserDetails();
  }, []);

  function handleChange(e) {
    const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);
    setUserImg(fotoUrl); //url
    setUserPhoto(foto);
    // const formData = new FormData()
    // formData.append('chave',valor)
    // await axios.post('/url',formData,{
    //     headers:{
    //         'Content-Type':'multipart/form-data'
    //     }
    // })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let formErro = false;
    if (!UserName) {
      formErro = true;
      return toast.error("Nome vazio");
    }
    if (!UserSobrenome) {
      formErro = true;
      return toast.error("Sobrenome vazio");
    }
    if (!UserEmail) {
      formErro = true;
      return toast.error("email vazio");
    }

    if (!isEmail(UserEmail)) {
      formErro = true;
      return toast.error("email invalido");
    }

    if (!formErro) {
      const formData = new FormData();
      formData.append("name", UserName);
      formData.append("sobrenome", UserSobrenome);
      formData.append("email", UserEmail);
      console.log(UserPassword)
      formData.append("password", UserPassword);
      formData.append("userImg", UserPhoto);
      try {
        setIsloading(true);
        console.log(userToken)
        const response = await axios.post(
          `http://localhost:3030/update/${userId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              'autorization':`Bearer ${userToken}`
            },
          }
        );
        setIsloading(false);
        toast.success("Sucesso em atualizar usuario");
        console.log(response);
        // navigate('/userpage')
      } catch (err) {
        console.log(err);
        setIsloading(false);
      }
    }
  }

  // }
  return (
    <>
      <Loading isLoading={isLoading}></Loading>
      <header>
        <nav class="options">
          <a href="/">
            <div class="logo">
              <i class="fab fa-simplybuilt"></i>
            </div>
          </a>

          <div class="icons">
            <i class="fas fa-th-large in_used"></i>
            <a href="/addvideo">
              <i class="fas fa-photo-video"></i>
            </a>
            <i class="fas fa-gamepad"></i>
            <i class="fas fa-star"></i>
          </div>
          <div className="icons">
            {" "}
            <i
              className="fas fa-door-open logoutIco"
              onClick={handleLogout}
            ></i>
          </div>
        </nav>
      </header>

      <main>
        <form
          className="formData"
          onSubmit={(e) => handleSubmit(e)}
          method="post"
          id="userForm"
          enctype="multipart/form-data"
        >
          <label for="imageInput">
            <div className="userDetails">
              <img id="user-img" src={UserImg} for="image" alt="" />
              <span>
                {UserName} {UserSobrenome}
              </span>
            </div>
          </label>
          <input
              id="imageInput"
              type="file"
              name="userImg"
              onChange={handleChange}
            />
            

          <div className="inputGroup">
            
            <input
              type="text"
              name="name"
              value={UserName}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            
            />
            <input
            type="text"
            name="sobrenome"
            value={UserSobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Sobrenome"
          />
          </div>
          <div className="inputGroup">
          <input
            type="text"
            name="email"
            value={UserEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            name="userName"
            value={UserUserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />

          </div>
          <div className="inputGroup">
          <input
            type="password"
            name="New password"
            placeholder="password"
            autoComplete="true"
            value={UserPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
          className="noInput"
           
          />
          

          </div>
          
          
          
          <input type="submit" value="Salvar" />
        </form>
      </main>
    </>
  );
}
