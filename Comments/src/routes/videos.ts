import router from 'express'
import videoController from '../controllers/VideoController'
const videosRouter = router()
import VideoController from '../controllers/VideoController'
import videoUpdate from  '../middlewares/Multer'



videosRouter.post('/videos',videoUpdate.single('video'),videoController.newVideo)

videosRouter.get('/videos',videoController.findAllVideos)

videosRouter.get('/videos/:videoId',VideoController.findOneVideo)

videosRouter.put('/videos/:videoId',VideoController.updateVideo)

videosRouter.delete('/videos/:videoId',videoController.deleteVideo)

export default videosRouter;