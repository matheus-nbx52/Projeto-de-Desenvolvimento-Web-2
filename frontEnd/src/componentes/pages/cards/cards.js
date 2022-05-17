import { useState } from "react"
import axios from "axios"
import Img from '../../imgs/imagem-teste.jpeg'


export default function Card({ videoname, assunto, urlvideo, data, videoId }) {
    function renderVideo(e){
        const videoId = e.target.id
        if(!videoId) return
        console.log(videoId)

    }

    return (
        <div class="video_card"  onClick={ (e)=>{renderVideo(e)}}>
            <div class="card_image">
                <video src={`http://localhost:8081/upload/${urlvideo}`} id={videoId} ></video>
            </div>

            <div class="card_ico">
                <i class="far fa-star"></i>
            </div>
            <div class="description">
                <div class="itens" >
                    <input value={videoId} className='inputDisable'></input>
                    <div class="year description_item">2022</div>
                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                    <div class="type description_item"><i class="fas fa-photo-video ico"></i>{assunto}</div>
                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                    <div class="restriction description_item"></div>
                </div>
                <div class="title">
                    <h3>{videoname}</h3>
                </div>
            </div>
        </div>
    )


}