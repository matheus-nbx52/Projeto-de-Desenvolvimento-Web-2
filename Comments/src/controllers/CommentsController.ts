import { Request, Response } from "express";

class CommentsController {

    async newComment(req: Request, res: Response) { }
    async findOneComment(req: Request, res: Response) { }
    async findAllComment(req: Request, res: Response) {
        res.send('opa')
    }
    async updateComment(req: Request, res: Response) { }
    async deleteComment(req: Request, res: Response) { }
}

export default new CommentsController();