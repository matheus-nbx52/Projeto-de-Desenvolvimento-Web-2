/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Corpo/Corpo.css'
import Img from '../../imgs/imagem-teste.jpeg'
import OwlCarousel from 'react-owl-carousel';
import '../../owen/owl.carousel.css'
import '../../owen/owl.theme.default.min.css'

export default function Corpo() {

    return (
        <>
            
                <section className="videos-container">
                    <div className="title">
                        <h1>Videos mais assistidos</h1>
                    </div>

                <OwlCarousel className='owl-carousel owl-theme container'  nav >
                    
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card-image">
                                        <img src={Img} alt="" />
                                    </div>
                                    <div className="card-ico">
                                        <i className="far fa star"></i>
                                    </div>
                                    <div className="descriiption">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Valorant Clip 01</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card-image">
                                        <img src={Img} alt="" />
                                    </div>
                                    <div className="card-ico">
                                        <i className="far fa star"></i>
                                    </div>
                                    <div className="descriiption">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Valorant Clip 02</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card-image">
                                        <img src={Img} alt="" />
                                    </div>
                                    <div className="card-ico">
                                        <i className="far fa star"></i>
                                    </div>
                                    <div className="descriiption">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Valorant Clip 03</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="trending_card">
                                    <div className="card-image">
                                        <img src={Img} alt="" />
                                    </div>
                                    <div className="card-ico">
                                        <i className="far fa star"></i>
                                    </div>
                                    <div className="descriiption">
                                        <div className="itens">
                                            <div className="year description_item">2021</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="type description_item"><i className="fas fa-photo-video ico"></i>Movie</div>
                                            <div className="pointer"><i className="fas fa-futbol"></i></div>
                                            <div className="restriction description_item">PG</div>
                                        </div>
                                        <div className="title">
                                            <h3>Valorant Clip 04</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                    
            </OwlCarousel>
                </section>

            <section>
                <div class="title">
                    <h1>Recomendado para você</h1>
                </div>
                <div class="cards">
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
                                <div class="restriction description_item">PG</div>
                            </div>
                            <div class="title">
                                <h3>Clip 01</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards">
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
                                <div class="restriction description_item">PG</div>
                            </div>
                            <div class="title">
                                <h3>Clip 02</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards">
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
                                <div class="restriction description_item">PG</div>
                            </div>
                            <div class="title">
                                <h3> Clip 03</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards">
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
                                <div class="restriction description_item">PG</div>
                            </div>
                            <div class="title">
                                <h3>Clip 04</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}