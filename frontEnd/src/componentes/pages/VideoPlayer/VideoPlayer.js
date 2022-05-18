import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import VideoMp4 from "../videos/video.mp4"
import '../VideoPlayer/VideoPlayer.css'
import Comentarios from './Comentarios'
import { TextField, Button } from '@material-ui/core';
import { MdSend } from "react-icons/md";

export default function VideoPlayer() {
    const { videoid } = useParams()
    const [videoUrl, setVideoUrl] = useState('')
    const [comment, setComment] = useState([])
    const [userId,setUserId] = useState('')
    const [comantarioVideo,setComentarioVideo] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8081/videos/${videoid}`).then((data) => {
            const video = data.data.videos
            setVideoUrl(video.videoUrl)

        })

        axios.get(`http://localhost:8081/Comment`).then((data) => {
            var comments = data.data.comments
            setComment(comments)
        })

        const data = localStorage.getItem('userToken')
        const userId = JSON.parse(data).userId
        setUserId(userId)
        


    }, [])

    function Update(){
        axios.post('http://localhost:8081/Comment',{videos_idVideos:videoid,userID:userId,comentario:comantarioVideo})
    }
    

    return (
        <>
            <section>
                <div className="reprodutor-videos">

                    <video id="videoPlayer" controls media="(min-width:100px)" src={`http://localhost:8081/upload/${videoUrl}`} type="video/mp4" />

                </div>
                <div className="comentarios">

                    {comment.map((item) => {
                        if (item.videos_idVideos == videoid) {
                            console.log(item.id)
                            return <Comentarios comentario={item.comentario} ItemId={item.id} />
                            

                        }

                    })}




                </div>
                <form className="postar-Comentarios" onSubmit={Update}>
                    <TextField
                        label="Adicionar comentario"
                        size="medium"
                        name="comentario"
                        value={comantarioVideo}
                        onChange={(e)=>{setComentarioVideo(e.target.value)}}
                        variant="outlined"
                        className="adicionar-comentarios"
                        placeholder="adicionar comentario"
                    />
                    

                    <Button
                        variant="contained"
                        size="medium"
                        endIcon={<MdSend />}
                        type="submit"
                    >
                        Send
                    </Button>
                </form>

            </section>
        </>
    )
}