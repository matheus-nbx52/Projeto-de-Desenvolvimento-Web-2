import "./styled.css";
import "@vime/core/themes/default.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../componentes/Loading";
import { useSelector } from "react-redux";

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const { videoid } = useParams();
  const [mainVideo, setMainVideo] = useState(" ");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [users, setUsers] = useState();
  const [newComment, setNewComment] = useState();
  const userLoggedId = useSelector((state) => state.auth.userId);
  const [videoComments, setVideoComments] = useState([]);
  const [MainVideoAuth,setMainVideoAuth] = useState('')

  useEffect(() => {
    getVideos();
    getMainVideo();
    getComments();
    getUsersById(mainVideo.userID)
  }, [videoid]);

  async function getMainVideo() {
    axios.get(`http://localhost:8081/videos/${videoid}`).then((response) => {
      setMainVideo(response.data.videos);
      console.log(mainVideo)

    });
  }
  async function getVideos() {
    setIsLoading(true);
    await axios.get("http://localhost:8081/videos").then((response) => {
      setVideos(response.data.videos);
      setIsLoading(false);
    });
  }

  function renderVideo(videoId) {
    navigate(`/videoplayer/${videoId}`);
  }

  function getComments() {
    axios.get(`http://localhost:8081/comment/${videoid}`).then((response) => {
      setVideoComments(response.data);
     
      
    });
  }

  function getUsersById(userID){
    console.log(userID)
    axios.get(`http://localhost:3030/user/${userID}`).then((response)=>{
      setMainVideoAuth(response.data.user)
      console.log(response.data)

      
    
    })
  }


  function handleClickNewComment() {
    setVideoComments([...videoComments,{
      userID: userLoggedId,
      videos_idVideos: videoid,
      comentario: newComment,
    }])
    axios
      .post(`http://localhost:8081/Comment`, {
        userID: userLoggedId,
        videos_idVideos: videoid,
        comentario: newComment,
      })
      .then((response) => {
        setNewComment("");
        
      })
      .catch((e) => {
        console.log(e);
      });
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
            <i class="fas fa-th-large in_used"></i>
            <a href="/addvideo">
              <i class="fas fa-photo-video"></i>
            </a>
            <i class="fas fa-gamepad"></i>
            <i class="fas fa-star"></i>
          </div>
          <div></div>
        </nav>
      </header>

      <div className="container1">
        <main>
          <div className="videoContainer">
            <div className="videoPlayer">
              <video
                src={`http://localhost:8081/upload/${mainVideo.videoUrl}`}
                controls
              />
            </div>

            <div className="videoDescription">
              <h2>{mainVideo.videoTitle}</h2>
              <p>
                Tiktok mashup 2022 | Tiktok viral hits ~ Best tiktok songs
                Tiktok mashup 2022 | Tiktok viral hits ~ Best tiktok songs You
                have such good music taste: https://bit.ly/mooncatplaylist Click
                to follow this Spotify playlist:
                https://sptlnk.com/GetLostInSongs https://sptlnk.com/WorkCoffee
              </p>
            </div>

            <div className="userDatails">
              <img src={`http://localhost:3030/upload/${MainVideoAuth.image}`}></img>
              <div className="userInformations">
                <span className="userName">{MainVideoAuth.name}</span>
                <p className="userName1">{}</p>
              </div>  
            </div>

            <div className="Comments">
              <div className="line" />
              <div className="CommentTitle">Comentarios</div>
              <div className="newComment">
                <img src="https://th.bing.com/th/id/OIP.x0hrw_HVzo2WNHDRjbN_OQHaHk?pid=ImgDet&rs=1"></img>
                <div className="newCommentInput">
                  <input
                    name="comment"
                    placeholder="Adicione um comentario..."
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                  />
                  <div className="line" />
                  <div className="buttons">
                    <button>Cancelar</button>
                    <button onClick={handleClickNewComment}>Comentar</button>
                  </div>
                </div>
              </div>

              <div className="videoComments">
                  {videoComments.map((comments)=>{
                    return (
                      <div className="comment">
                      <img src="https://th.bing.com/th/id/OIP.x0hrw_HVzo2WNHDRjbN_OQHaHk?pid=ImgDet&rs=1"></img>

                      <div className="commentVideo">
                        <div className="commentVideoUserName">
                          Cintia Santos
                        </div>
                        <div className="commentVideoUserComment">
                          {comments.comentario}
                        </div>
                        <div className="commentVideoIcons">
                          <AiOutlineLike />
                          <span>100</span>
                          <AiOutlineDislike />
                          <span>Responder</span>
                        </div>
                      </div>
                    </div>

                    )
                  })}
                
              </div>
            </div>
          </div>
          
          <div className="videos">
            {videos.map((video) => {
              return (
                <div
                  className="video"
                  onClick={(e) => {
                    renderVideo(video.id);
                  }}
                >
                  <video
                    src={`http://localhost:8081/upload/${video.videoUrl}`}
                  />
                  <div className="videoDetails">
                    <div className="videoTitle">{video.videoTitle}</div>
                    <div className="videoUserDetais">
                      <div className="videoUserImg">
                        <img src="https://th.bing.com/th/id/OIP.x0hrw_HVzo2WNHDRjbN_OQHaHk?pid=ImgDet&rs=1"></img>
                      </div>
                      <div className="videoUserName">{}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
