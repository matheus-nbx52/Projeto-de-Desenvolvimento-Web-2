import express from 'express';
import mongoose from 'mongoose';
// import StatusCodes from 'http-status-codes';
// rota de usuarios
import * as dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes';

const app = express();
dotenv.config(); // Permite o uso do dotenvs

// app.emit emite um evento que sera pego depois com o app.on
mongoose.connect(process.env.CONNECT_STRING).then(() => {
  app.emit('connectionOk');
}).catch((e) => {
  console.log(e); // Lembrar de por uma rota 404 aqui
});

// Faz o form eo Json funcionar

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('hello');
});

// o server so vai funcionar se o mongoose tiver uma conexão bem sucedida

app.on('connectionOk', () => {
  app.listen(3000, () => {
    console.log('server executando na porta 3000');
  });
});

// Cadastro de usuarios,