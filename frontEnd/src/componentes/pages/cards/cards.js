import { useState } from "react"
import axios from "axios"
import Img from '../../imgs/imagem-teste.jpeg'


export default function Card() {
    return (
        <div class="video_card">
            <div class="card_image">
                <img src={Img} alt="" />
            </div>
            <div class="card_ico">
                <i class="far fa-star"></i>
            </div>
            <div class="description">
                <div class="itens">
                    <div class="year description_item">2021</div>
                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                    <div class="type description_item"><i class="fas fa-photo-video ico"></i>Movie</div>
                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                    <div class="restriction description_item"></div>
                </div>
                <div class="title">
                    <h3>Beyond Earth</h3>
                </div>
            </div>
        </div>
    )


}