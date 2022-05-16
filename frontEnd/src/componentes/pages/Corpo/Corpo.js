/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import '../Corpo/Corpo.css'
import Img from '../../imgs/imagem-teste.jpeg'
import OwlCarousel from 'react-owl-carousel';
import '../../owen/owl.carousel.css'
import '../../owen/owl.theme.default.min.css'

export default function Corpo() {
    // function VerificaLogado(){
    //     const token = localStorage.getItem('userToken')
    //     console.log(token)
    // }
    
    // VerificaLogado()

    return (
        <>
            <header class="container">
                <nav class="options">
                    <div class="logo">
                        <i class="fab fa-simplybuilt"></i>
                    </div>

                    <div class="icons">
                        <i class="fas fa-th-large in_used"></i>
                        <i class="fas fa-photo-video"></i>
                        <i class="fas fa-gamepad"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <div class="user">
                        <img src="assets/images/31552e5e2dc259477da2247a3e540603.jpg" alt="" />
                    </div>

                </nav>

                <div class="seacher_bar container">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search for movies of TV series" />

                </div>

            </header>
            <main>

                <section class="videos container">
                    <div class="title">
                        <h1>Trending</h1>
                    </div>
                    <div class="carouseu_filmes">
                        <OwlCarousel className='owl-carousel owl-theme container' loop margin={200} nav >
                            <div class="item">
                                <div class="trending_card">
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
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="item">
                                <div class="trending_card">
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
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="trending_card">
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
                                            <h3>Beyond Earth</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="trending_card">
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
                            </div>
                            <div class="item">
                                <div class="trending_card">
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


                            </div>
                        </OwlCarousel>


                    </div>




                </section>
                <section class="container">
                    <div class="title">
                        <h1>Recommended for you</h1>
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
                                    <div class="restriction description_item"></div>
                                </div>
                                <div class="title">
                                    <h3>Beyond Earth</h3>
                                </div>
                            </div>
                        </div>
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



                    </div>
                </section>

            </main>

        </>
    )
}