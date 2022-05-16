import { Request, Response } from "express";
import { VideosModel } from "../models/VideosModels";

class VideoController {
    //posta um novo video
    async newVideo(req, res: Response) {
        const {userID, videoTitle, videoUrl, likeNumber, subject,} = req.body;
        const videos = await VideosModel.create({
            userID,
            videoTitle,
            videoUrl:req.file ? req.file.filename : undefined, 
            likeNumber, 
            subject,});
            return res.status(201).json({          
                error: false,
                message: 'sucess',
                videos,
      });
      
     }
     //request de um video
    async findOneVideo(req: Request, res: Response) {
        const {videoId} = req.params;
        const videos = await VideosModel.findOne({
            where:{
                id: videoId,
            },
        });
        return videos 
        ? res.status(200).json({
            error: false, 
            message: 'sucess', 
            videos,})
        :res.status(204).send();
     }
    async findAllVideos(req: Request, res: Response) {

     }
    async updateVideo(req: Request, res: Response) {

     }
    async deleteVideo(req: Request, res: Response) {

     }
}

export default new VideoController();