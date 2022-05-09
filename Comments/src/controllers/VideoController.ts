import { Request, Response } from "express";

class VideoController {

    async newVideo(req: Request, res: Response) {
        
     }
    async findOneVideo(req: Request, res: Response) { }
    async findAllVideos(req: Request, res: Response) { }
    async updateVideo(req: Request, res: Response) { }
    async deleteVideo(req: Request, res: Response) { }
}

export default new VideoController();