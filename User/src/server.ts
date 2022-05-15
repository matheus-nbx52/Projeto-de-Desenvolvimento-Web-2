import express from 'express';
import mongoose from 'mongoose';
// import StatusCodes from 'http-status-codes';
// rota de usuarios
import * as dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes';
import loginRoutes from './routes/LoginRoutes';

const app = express();
dotenv.config(); // Permite o uso do dotenvs

// app.emit emite um evento que sera pego depois com o app.on
mongoose.connect(process.env.CONNECT_STRING).then(() => {
  app.emit('connectionOk');
}).catch((e) => {
  console.log(e); // Lembrar de por uma rota 404 aqui
});

app.use(express.static('public')); // setando a pasta onde estarão os arquivos estaticos
// Vai permitir o uso das imagens via url :)

// Faz o form eo Json funcionar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/', userRoutes);
app.use('/', loginRoutes);

// Caso nenhuma rota Exista um rota de 404 deve vir aqui :)
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: 'Rota não disponivel ',
  });
});

// o server so vai funcionar se o mongoose tiver uma conexão bem sucedida
app.on('connectionOk', () => {
  app.listen(3030, '0.0.0.0');
});

// Cadastro de usuarios,
