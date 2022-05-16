import router from 'express'
const CommentRouter = router()
import CommentsController from '../controllers/CommentsController' 


CommentRouter.post('/Comment',CommentsController.newComment)

CommentRouter.get('/Comment',CommentsController.findAllComment)

CommentRouter.get('/Comment/:videoid',CommentsController.findOneComment)

CommentRouter.put('/Comment/:commentId',CommentsController.updateComment)

CommentRouter.delete('/Comment/:commentId',CommentsController.deleteComment)

export default CommentRouter;