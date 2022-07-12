import { Request, Response } from "express";
import { where } from "sequelize/types";
import { CommentsModel } from "../models/CommentsModel";
import myCache from "../middlewares/cache";

class CommentsController {
  //posta um comentario
  async newComment(req: Request, res: Response) {
    try {
      const { userID, videos_idVideos, comentario } = req.body;
      const comments = await CommentsModel.create({
        userID,
        videos_idVideos,
        comentario,
      });
      return res.status(201).json({
        error: false,
        message: "sucess",
        comments,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: true,
        message: "Database error",
      });
    }
  }
  async findOneComment(req: Request, res: Response) {
    const { videoid } = req.params;
    const comments = await CommentsModel.findAll({
      where: {
        videos_idVideos: videoid,
      },
      order:[
        ['createdAt','DESC']
      ]
    });
    return res.json(comments);
  }
  //consultar todos os comentarios
  async findAllComment(req: Request, res: Response) {
    // implementação do cache
    if (myCache.has("comments")) {
      return res.status(200).json({
        error: false,
        message: "sucess",
        comments: myCache.get("comments"),
      });
    }

    const comments = await CommentsModel.findAll();
    myCache.set("comments", { comments });
    return comments.length > 0
      ? res.status(200).json({
          error: false,
          message: "sucess",
          comments,
        })
      : res.status(204).send();
  }
  //edita ou atualiza um comentario
  async updateComment(req: Request, res: Response) {
    const { commentId } = req.params;
    await CommentsModel.update(req.body, { where: { id: commentId } });
    return res.status(204).send();
  }
  //deleta um comentario
  async deleteComment(req: Request, res: Response) {
    const { commentId } = req.params;
    await CommentsModel.destroy({ where: { id: commentId } });
    return res.status(204).send();
  }
}

export default new CommentsController();
