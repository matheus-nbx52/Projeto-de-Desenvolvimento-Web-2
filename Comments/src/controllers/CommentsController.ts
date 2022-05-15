import { Request, Response } from "express";
import { CommentsModel } from "../models/CommentsModel";

class CommentsController {
    //posta um comentario
    async newComment(req: Request, res: Response) { 
        const {userID, videos_idVideos, comentario} = req.body;
        const comments = await CommentsModel.create({
            userID,
            videos_idVideos,
            comentario,
        });
        return res.status(201).json({          
            error: false,
            message: 'sucess',
            comments,
  });
    }
    async findOneComment(req: Request, res: Response) { 

    }
    async findAllComment(req: Request, res: Response) {
        const comments = await CommentsModel.findAll();
        return comments.length > 0
        ? res.status(200).json({
            error: false, 
            message: 'sucess', 
            comments,})
        :res.status(204).send();
    }
    async updateComment(req: Request, res: Response) { 

    }
    async deleteComment(req: Request, res: Response) {

     }
}

export default new CommentsController();