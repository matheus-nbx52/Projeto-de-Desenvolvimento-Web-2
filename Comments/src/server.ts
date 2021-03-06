import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as dotenv from 'dotenv';
import videosRouter from './routes/videos'; 
import { db } from './database/db';
import { VideosModel } from './models/VideosModels' 
import { CommentsModel } from './models/CommentsModel'
import CommentRouter from './routes/comments'
import delay from 'express-delay';
import cors from 'cors'
import myCache from '../src/middlewares/cache'

// rota de usuarios
dotenv.config();

const app = express();
// Faz o form eo Json funcionar

app.use(express.json());



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // setando a pasta onde estarão os arquivos estaticos
// Vai permitir o uso das imagens via url :)



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(CommentRouter)


app.use(videosRouter)



app.listen(8081, async ()=>{
  await VideosModel.sync()
  await CommentsModel.sync()
  console.log('app runner in 8081')


});
