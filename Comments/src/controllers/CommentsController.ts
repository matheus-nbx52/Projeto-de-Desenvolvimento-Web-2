import { Request, Response } from "express";
import { CommentsModel } from "../models/CommentsModel";

class CommentsController {

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
    async findOneComment(req: Request, res: Response) { }
    async findAllComment(req: Request, res: Response) {
        res.send('opa')
    }
    async updateComment(req: Request, res: Response) { }
    async deleteComment(req: Request, res: Response) { }
}

export default new CommentsController();