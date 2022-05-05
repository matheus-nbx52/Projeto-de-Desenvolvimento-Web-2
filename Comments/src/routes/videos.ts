import router from 'express'
import videoController from '../controllers/VideoController'
const videosRouter = router()
import VideoController from '../controllers/VideoController'



videosRouter.post('/videos',videoController.newVideo)

videosRouter.get('/videos',videoController.findAll)

videosRouter.get('/videos/:videoId',VideoController.findOne)

videosRouter.put('/videos/:videoId',VideoController.update)

videosRouter.delete('/videos/:videoId',videoController.delete)

export default videosRouter;