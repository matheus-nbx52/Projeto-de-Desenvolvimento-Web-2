import express from 'express';
import { StatusCodes } from 'http-status-codes';
import * as dotenv from 'dotenv';
import videosRouter from './routes/videos'; 
import { db } from './database/db';
import { VideosModel } from './models/VideosModels' 
import { CommentsModel } from './models/CommentsModel'



// rota de usuarios
dotenv.config();

const app = express();
// Faz o form eo Json funcionar


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(videosRouter)

// rotas
app.get('/', (req, res) => {
  res.status(StatusCodes.OK).send('hello');
});

app.listen(8081, async ()=>{
  await VideosModel.sync()
  await CommentsModel.sync()
  console.log('app runner in 8081')


});
