/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import '../Corpo/Corpo.css'
import Img1 from '../../static/imgs/call-of-duty-modern-warfare-warzone-.jpg'
import Img2 from '../../static/imgs/valorant-capa.jpg'
import Img3 from '../../static/imgs/Rainbow-Six.jpg'
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
import '../../static/owen/owl.carousel.css'
import '../../static/owen/owl.theme.default.min.css'
import Card from '../cards/cards'
import Loading from '../../componentes/Loading';
import { useSelector } from 'react-redux';
import noUser from '../../static/imgs/no-User.png'



export default function Corpo() {
    const [UserImg, setUserImg] = useState('')
    const [AllVideos, setAllVideos] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [busca, setBusca] = useState([1, 2, 3])
    const [userImageapi, setUserImgApi] = useState('')
    const userId = useSelector(state => state.auth.userId)



    useEffect(() => {
        GetAllVideos()
        GetUserPhoto()

    }, [])
    function GetUserPhoto() {
        axios.get(`${process.env.REACT_APP_USER_URL}/user/${userId}`).then((userApi) =>
            setUserImgApi(`${process.env.REACT_APP_USER_URL}/upload/${userApi.data.user.image}`)


        ).catch((e) => console.log(e))

    }

    async function GetAllVideos() {
        await axios.get(`${process.env.REACT_APP_COMMENTS_URL}/videos`).then((data) => {
            let user = data.data.videos
            setAllVideos(user)
            setLoading(false)
        })

    }

    function handleChange(e) {
        axios.get(`${process.env.REACT_APP_COMMENTS_URL}/videos/search?search_query=${e.target.value}`).then((data) => {
            let user = data.data.videosFiltrados
            setAllVideos(user)
        })

    }

                       
    return (
        <>
            <Loading isLoading={isLoading} />
            <header class="container">
                <nav class="options">
                    <div class="logo">
                        <i class="fab fa-simplybuilt"></i>
                    </div>

                    <div class="icons">
                        <i class="fas fa-th-large in_used"></i>
                        <a href="/addvideo"><i class="fas fa-photo-video"></i></a>
                        <a href="/uservideos"><i class="fas fa-gamepad"></i></a>
                        <i class="fas fa-star"></i>

                    </div>
                    <div class="user">
                        <a href="/userpage"><img src={userImageapi ? userImageapi : noUser} alt="" /></a>
                    </div>

                </nav>

                <div class="seacher_bar container">
                    <i class="fas fa-search"></i>
                    <input type="text" onChange={(e) => handleChange(e)} placeholder="Search for movies of TV series" />

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
                                        <img src={Img1} alt="" />
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
                                        <img src={Img2} alt="" />
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
                                        <img src={Img3} alt="" />
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
                                        <img src={Img2} alt="" />
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
                                        <img src={Img3} alt="" />
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

                    <div class="cards" id='DataCard'>

                        {AllVideos.map((video) => {
                            return <Card
                                videoname={video.videoTitle}
                                videoId={video.id}
                                assunto={video.subject}
                                urlvideo={video.videoUrl}
                                data={video.updatedAt} />
                        })}

                    </div>
                </section>

            </main>

        </>
    )
}