import '../addVideo/addVideo.css'
import { useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function AddVideo() {
    const [idUser,setIdUser] = useState('')
    const navigate = useNavigate();
    

    useEffect(() => {
        VerificaLogado()
    }, [])
    

    function VerificaLogado() {
        const data = localStorage.getItem('userToken')
        if (!data) return navigate('/loginpage')
        const userId = JSON.parse(data).userId
        if (!userId) return navigate('/loginpage')
        setIdUser(userId)
        // console.log(userId)
        if (data) {
            axios.get(`http://localhost:3030/user/${userId}`).then((userApi) => {
                console.log('certo')
            }).catch((e) => {
                navigate('/loginpage')
                console.log(e)
            })
        } else {
            
        }
    }
    return (

        <>
            <main>
                <section id='box-video' >
                    <form method='post' action='http://localhost:8081/videos' enctype="multipart/form-data">
                        <div className='box-add-video'>
                            <label for='videoSend'><i class="fas fa-camera"></i></label>
                            <input type='file' name='video' id='videoSend'  />
                        </div>
                        <div className='video-itens'>
                            <input type='text' name='videoTitle' placeholder='videoTitle'></input>
                            <input type='text' name='subject' placeholder='subject'></input>
                            <input type='text' name='userID' placeholder='userID' className='inputDisable' value={idUser}></input>
                            <input type='text' name='likeNumber' placeholder='LikeNumber' className='inputDisable' value='0'></input>
                            <input type='submit' placeholder='Enviar'></input>


                        </div>
                    </form>

                </section>
            </main>

        </>

    )
}