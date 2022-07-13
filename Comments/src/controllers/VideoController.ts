import { Request, Response } from "express";
import { VideosModel } from "../models/VideosModels";
import myCache from "../middlewares/cache";

type Video = {
  videoTitle: string;
  videoUrl: string;
  likeNumber: number;
  subject: string;
  userID: string;
};

class VideoController {
  //posta um novo video
  async newVideo(req, res: Response) {
    const { userID, videoTitle, videoUrl, likeNumber, subject, description } =
      req.body;
    const videos = await VideosModel.create({
      userID,
      videoTitle,
      videoUrl: req.file ? req.file.filename : undefined,
      likeNumber,
      subject,
      description,
    });
    return res.status(201).json({
      error: false,
      message: "sucess",
      videos,
    });
  }
  //request de um video
  async findOneVideo(req: Request, res: Response) {
    const { videoId } = req.params;
    const videos = await VideosModel.findOne({
      where: {
        id: videoId,
      },
    });
    return videos
      ? res.status(200).json({
          error: false,
          message: "sucess",
          videos,
        })
      : res.status(204).send();
  }
  //request de varios videos

  async findAllVideos(req: Request, res: Response) {
    if (myCache.has("videos")) {
      return res.status(200).json(myCache.get("videos"));
    }

    const videos = await VideosModel.findAll();
    if (!videos) return res.send("error");
    myCache.set("videos", { videos });
    return res.status(200).json({
      error: false,
      message: "sucess",
      videos,
    });
  }
  //atualiza ou edita video
  async updateVideo(req: Request, res: Response) {
    const { videoId } = req.params;
    await VideosModel.update(req.body, { where: { id: videoId } });
    return res.status(204).send();
  }
  //deleta um video
  async deleteVideo(req: Request, res: Response) {
    const { videoId } = req.params;
    await VideosModel.destroy({ where: { id: videoId } });
    return res.status(204).send();
  }

  async findVideoByName(req: Request, res: Response) {
    const videoName:any = req.query.search_query;
    const videos = await VideosModel.findAll();
    // se nao tivaer a query ele retornara todos os videos
    if (!videoName) {
      return res.status(200).json({
        error: false,
        message: "sucess",
        videosFiltrados: videos,
      });
    }

    if (!videos) return res.send("Error");
    const videosFiltrados = videos.filter((video:any) =>
      video.videoTitle.toLowerCase().includes(videoName.toLowerCase())
    );
    return res.status(200).json({
      error: false,
      message: "sucess",
      videosFiltrados,
    });
  }
}

export default new VideoController();
