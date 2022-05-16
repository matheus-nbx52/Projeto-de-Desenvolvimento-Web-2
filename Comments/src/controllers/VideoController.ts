import { Request, Response } from "express";
import { VideosModel } from "../models/VideosModels";

class VideoController {
    //posta um novo video
    async newVideo(req: Request, res: Response) {
        const {userID, videoTitle, videoUrl, likeNumber, subject,} = req.body;
        const videos = await VideosModel.create({
            userID,
            videoTitle,
            videoUrl, 
            likeNumber, 
            subject,});
            return res.status(201).json({          
                error: false,
                message: 'sucess',
                videos,
      });

     }
    async findOneVideo(req: Request, res: Response) {

     }
    async findAllVideos(req: Request, res: Response) {

     }
    async updateVideo(req: Request, res: Response) {

     }
    async deleteVideo(req: Request, res: Response) {

     }
}

export default new VideoController();