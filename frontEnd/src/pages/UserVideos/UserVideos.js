import "./UserVideos.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "../../store/modules/auth/actions.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../../componentes/Loading";
import { toast } from "react-toastify";
import Card from "../cards/cards";
import { BiTrash } from "react-icons/bi";


export default function UserPage() {
  const userId = useSelector((state) => state.auth.userId);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [AllVideos,setAllVideos] = useState([])
  const [filterVideos,setFilterVideos] = useState([])
  

  const handleLogout = () => {
    dispatch(actions.loginFail());
    navigate("/");
  };
  useEffect(()=>{
    getVideo()
    
    
  },[userId])

  function getVideo(){
    setIsloading(true)
    axios.get('http://localhost:8081/videos').then((response)=>{
      const Videos = response.data.videos.filter(video => video.userID == userId)
      setFilterVideos(Videos)
      setIsloading(false)
      
    }).catch(()=>{
      setIsloading(false)
    })
  }

  function deleteVideo(videoID){
    setIsloading(true)
    axios.delete(`http://localhost:8081/videos/${videoID}`).then((response)=>{
    setIsloading(false)
    toast.success('video deletado com sucesso')
    getVideo()

    }).catch(()=>{
      setIsloading(false)
      toast.error('erro o deletar video')

    })
  }
  
  
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
            <a href="/">
              <i class="fas fa-th-large "></i>
            </a>
            <a href="/addvideo">
              <i class="fas fa-photo-video"></i>
            </a>
            <i class="fas fa-gamepad in_used"></i>
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

      <main className="userVideos">
        <section class="container">
          <div class="cards" id="DataCard">
            {filterVideos.map((video) => {
              return (
                <Card
                  videoname={video.videoTitle}
                  videoId={video.id}
                  assunto={video.subject}
                  urlvideo={video.videoUrl}
                  data={video.updatedAt}
                  ico={<BiTrash onClick={ () => { deleteVideo(video.id)}} />}
                  
                
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
