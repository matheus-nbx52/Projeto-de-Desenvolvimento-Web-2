import { useNavigate } from "react-router-dom"


export default function Card({ videoname, assunto, urlvideo, data, videoId,ico }) {
    const navigate = useNavigate();
    function renderVideo(e){
        const videoId = e.target.id
        if(!videoId) return
        console.log(videoId)
        navigate(`/videoplayer/${videoId}`)
        

    }

    return (
        <div class="video_card"  onClick={ (e)=>{renderVideo(e)}}>
            <div class="card_image">
                <video src={`${process.env.REACT_APP_COMMENTS_URL}/upload/${urlvideo}`} id={videoId} ></video>
            </div>

            <div class="card_ico">
                {!ico ? <i class="far fa-star"></i> : ico }
                
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