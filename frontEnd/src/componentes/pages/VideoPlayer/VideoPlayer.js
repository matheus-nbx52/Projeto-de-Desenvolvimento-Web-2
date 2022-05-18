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
    console.log(videoid)
    useEffect(() => {
        axios.get(`http://localhost:8081/videos/${videoid}`).then((data) => {
            const video = data.data.videos
            setVideoUrl(video.videoUrl)

        })
    })

    return (
        <>
            <section>
                <div className="reprodutor-videos">

                    <video id="videoPlayer" controls media="(min-width:100px)" src={`http://localhost:8081/upload/${videoUrl}`} type="video/mp4" />

                </div>
                <div className="comentarios">
                    <Comentarios />
                </div>
                <form className="postar-Comentarios">
                    <TextField
                        label="Adicionar comentario"
                        size="medium"
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