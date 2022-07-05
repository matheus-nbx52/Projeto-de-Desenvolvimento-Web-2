import { Request, Response } from "express";
import { where } from "sequelize/types";
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
        const {videoid} = req.params
        const comments = await CommentsModel.findAll({
            where:{
                videos_idVideos:videoid
            }
        })
        return res.json(comments)
    }
    //consultar todos os comentarios
    async findAllComment(req: Request, res: Response) {
        const comments = await CommentsModel.findAll();
        return comments.length > 0
        ? res.status(200).json({
            error: false, 
            message: 'sucess', 
            comments,})
        :res.status(204).send();
    }
    //edita ou atualiza um comentario
    async updateComment(req: Request, res: Response) { 
        const {commentId} = req.params;
        await CommentsModel.update(req.body, {where:{ id: commentId }});
        return res.status(204).send();
    }
    //deleta um comentario
    async deleteComment(req: Request, res: Response) {
        const { commentId } = req.params;
        await CommentsModel.destroy({ where: { id: commentId}});
        return res.status(204).send();
     }
}

export default new CommentsController();