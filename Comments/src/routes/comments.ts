import router from 'express'
const CommentRouter = router()
import CommentsController from '../controllers/CommentsController' 


CommentRouter.post('/Comment',CommentsController.newComment)

CommentRouter.get('/Comment',CommentsController.findAllComment)

CommentRouter.get('/Comment/:videoId',CommentsController.findOneComment)

CommentRouter.put('/Comment/:videoId',CommentsController.updateComment)

CommentRouter.delete('/Comment/:videoId',CommentsController.deleteComment)

export default CommentRouter;