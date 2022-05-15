import React from 'react';



export default function Corpo(){
   
       return(
        <section class="videos container">
            <div class="title">
                <h1>Videos mais assistidos</h1>
            </div>
            <div class="carrossel-filmes">
                <div class="owl-carousel owl theme">
                    <div class="item">
                        <div class="trending_card">
                            <div class="card-image">
                                <img src="" alt=""/>
                            </div>
                            <div class="card-ico">
                                <i class="far fa star"></i>
                            </div>
                            <div class="descriiption">
                                <div class="itens">
                                <div class="year description_item">2021</div>
                                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                                    <div class="type description_item"><i class="fas fa-photo-video ico"></i>Movie</div>
                                    <div class="pointer"><i class="fas fa-futbol"></i></div>
                                    <div class="restriction description_item">PG</div>
                                </div>
                                <div class="title">
                                    <h3>Valorant Clip 01</h3>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            
                        </div>
                    </div>
                </div>
            </div>
   
        </section>
    )
}