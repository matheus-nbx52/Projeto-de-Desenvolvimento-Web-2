import React from "react";
import VideoMp4 from "../videos/video.mp4"
import '../VideoPlayer/VideoPlayer.css'
import Comentarios from './Comentarios'


export default function VideoPlayer() {
    return (
        <>
            <section>
                <div className="reprodutor-videos">
                <video id="videoPlayer" controls>
                    <source media="(min-width:100px)" src={VideoMp4} type="video/mp4" />
                </video>
                </div>
                <div className="comentarios">
                    <Comentarios/>
                </div>
                
            </section>
        </>
    )
}