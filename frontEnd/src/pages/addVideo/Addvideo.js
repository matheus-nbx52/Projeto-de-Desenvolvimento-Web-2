import '../addVideo/addVideo.css'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../../componentes/Loading';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


export default function AddVideo() {
    // const [idUser,setIdUser] = useState('')
    // const navigate = useNavigate();
    const [videoUrl, setVideoUrl] = useState();
    const [isLoading, setIsloading] = useState(false)
    const [videoTitle, setVideoTitle] = useState('')
    const userId = useSelector(state => state.auth.userId)
    const [likeNumber, setLikeNumber] = useState(0)
    const [video, setVideo] = useState('')
    const [subject, setSubject] = useState('')




    function handleChange(e) {
        const video = e.target.files[0]
        const videoUrl = URL.createObjectURL(video)
        setVideoUrl(videoUrl)
        setVideo(video)

    }

    async function handleSubmit(e) {
        e.preventDefault()
        let formErro = false
        if(!videoTitle){
            toast.error('Titulo do video esta vazio')
            formErro = true

        }
        if(!subject){
            toast.error('Adicione ao menos 1 assunto ao video')
            formErro = true
        }

        if (!formErro) {
            const formData = new FormData()
            formData.append('videoTitle', videoTitle)
            formData.append('subject', subject)
            formData.append('userID', userId)
            formData.append('likeNumber', likeNumber)
            formData.append('video', video)
            try {
                setIsloading(true)
                const response = await axios.post(`http://localhost:8081/videos`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(response)
                setIsloading(false)
                toast.success('Video adicionado com sucesso')
                console.log(response)

            } catch (err) {
                console.log(err)
                setIsloading(false)
                toast.error('Erro ao adicionar video')

            }

        }




    }
    return (
        <>
            <main>
                <Loading isLoading={isLoading}></Loading>
                <section id='box-video' >
                    <form method='POST' onSubmit={e => handleSubmit(e)}>
                        <div className='box-add-video'>
                            <label for='videoSend'>
                                {!videoUrl ? <i class="fas fa-camera"></i> : <video controls src={videoUrl} ></video>}

                            </label>
                            <input type='file' name='video' id='videoSend' onChange={e => handleChange(e)} />
                        </div>
                        <div className='video-itens'>
                            <input type='text' name='videoTitle' placeholder='videoTitle' onChange={(e) => setVideoTitle(e.target.value)} value={videoTitle} />
                            <input type='text' name='subject' placeholder='subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
                            {/* aqui em user id tem que ter o id do video */}
                            <input type='submit' placeholder='Enviar'></input>


                        </div>
                    </form>

                </section>
            </main>

        </>

    )
}