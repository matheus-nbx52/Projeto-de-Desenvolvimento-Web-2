import "./styled.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../componentes/Loading";
import { useSelector } from "react-redux";
import NoUser from "../../static/imgs/no-User.png";
import { BiTrashAlt } from "react-icons/bi";
import { toast } from "react-toastify";

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const { videoid } = useParams();
  const [mainVideo, setMainVideo] = useState(" ");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [users, setUsers] = useState();
  const [newComment, setNewComment] = useState();
  const userLoggedId = useSelector((state) => state.auth.userId);
  const userToken = useSelector((state)=>state.auth.token)
  const [videoComments, setVideoComments] = useState([]);
  const [MainVideoAuth, setMainVideoAuth] = useState("");

  useEffect(() => {
    getAllUsers();
    getVideos();
    getMainVideo();
    getComments();
  }, [videoid]);

  async function getMainVideo() {
    axios.get(`${process.env.REACT_APP_COMMENTS_URL}/videos/${videoid}`).then((response) => {
      setMainVideo(response.data.videos);
      getUsersById(response.data.videos.userID);
    });
  }
  async function getVideos() {
    setIsLoading(true);
    await axios.get(`${process.env.REACT_APP_COMMENTS_URL}/videos`).then((response) => {
      setVideos(response.data.videos);
      setIsLoading(false);
    });
  }

  function renderVideo(videoId) {
    navigate(`/videoplayer/${videoId}`);
  }

  function getComments() {
    axios.get(`${process.env.REACT_APP_COMMENTS_URL}/comment/${videoid}`).then((response) => {
      setVideoComments(response.data);
    });
  }
  function userById(userID) {
    try {
      const userById = users.filter((user) => user._id == userID);
      console.log(userById);
      return userById;
    } catch (e) {
      return [{image:'none'}];
    }
  }

  function getUsersById(userID) {
    axios.get(`${process.env.REACT_APP_USER_URL}/user/${userID}`).then((response) => {
      setMainVideoAuth(response.data.user);
    });
  }
  
  function getAllUsers() {
    axios.get(`${process.env.REACT_APP_USER_URL}/user/`,
    ).then((response) => {
      setUsers(response.data.users);
    });

    
  }

  function handleClickDeleteComment(commentId, index) {
    setIsLoading(true);
    axios
      .delete(`${process.env.REACT_APP_COMMENTS_URL}/Comment/${commentId}`)
      .then((response) => {
        toast.success("comentario deletado com sucesso");
        setIsLoading(false);
        getComments();
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("erro no servidor");
      });
  }

  function handleClickNewComment() {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_COMMENTS_URL}/Comment`, {
        userID: userLoggedId,
        videos_idVideos: videoid,
        comentario: newComment,
      })
      .then((response) => {
        setIsLoading(false);
        setNewComment("");
        setVideoComments([response.data.comments, ...videoComments]);
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("erro no servidor");
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
            <a href="/uservideos"><i class="fas fa-gamepad"></i></a>
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
                src={`${process.env.REACT_APP_COMMENTS_URL}/upload/${mainVideo.videoUrl}`}
                controls
              />
            </div>

            <div className="videoDescription">
              <h2>{mainVideo.videoTitle}</h2>
              <p>
                {mainVideo.description ? mainVideo.description  :''}
              </p>
            </div>

            <div className="userDatails">
              <img
                alt="usuario"
                src={
                  MainVideoAuth.image
                    ? `${process.env.REACT_APP_USER_URL}/upload/${MainVideoAuth.image}`
                    : NoUser
                }
              ></img>
              <div className="userInformations">
                <span className="userName">{MainVideoAuth.name || "none"}</span>
                <p className="userName1">{}</p>
              </div>
            </div>

            <div className="Comments">
              <div className="line" />
              <div className="CommentTitle">Comentarios</div>
              <div className="newComment">
                <img
                  alt="usuario"
                  src={
                    
                    userById(userLoggedId)[0]
                      ? `${process.env.REACT_APP_USER_URL}/upload/${
                          userById(userLoggedId)[0].image || 'none'
                        }`
                      : NoUser
                  }
                ></img>
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
                {videoComments.map((comments, index) => {
                  console.log(comments.userID);
                  const user = userById(comments.userID);
                  return (
                    <div className="comment" key={index}>
                      <img
                        src={`${process.env.REACT_APP_USER_URL}/upload/${user[0].image}`}
                        alt='user'
                      ></img>

                      <div className="commentVideo">
                        <div className="commentVideoUserName">
                          {user[0].name}
                        </div>
                        <div className="commentVideoUserComment">
                          {comments.comentario}
                          <span className="threeDotsIco">
                            <BiTrashAlt
                              className="menuButton"
                              onClick={() => {
                                handleClickDeleteComment(comments.id, index);
                                // userById(comments.userID)
                              }}
                            />
                          </span>
                        </div>
                        <div className="commentVideoIcons">
                          <AiOutlineLike />
                          <span>100</span>
                          <AiOutlineDislike />
                          <span>Responder</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="videos">
            {videos.map((video) => {
              console.log(video.userID);
              const user = userById(video.userID);
              return (
                <div
                  className={mainVideo.id == video.id ? 'video selected' : 'video'}
                  onClick={(e) => {
                    renderVideo(video.id);
                  }}
                >
                  <video
                    src={`${process.env.REACT_APP_COMMENTS_URL}/upload/${video.videoUrl}`}
                  />
                  <div className="videoDetails">
                    <div className="videoTitle">{video.videoTitle}</div>
                    <div className="videoUserDetais">
                      <div className="videoUserImg">
                        <img
                          src={`${process.env.REACT_APP_COMMENTS_URL}/upload/${user[0].image}`}
                          alt='userImage'
                        ></img>
                      </div>
                      <div className="videoUserName">{user[0].name}</div>
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
