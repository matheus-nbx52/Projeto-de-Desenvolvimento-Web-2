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
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// Rotas
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('hello');
});
// Caso nenhuma rota Exista
app.use((req, res) => {
  res.status(404).json({ message: 'Erro ao acessar a rota' });
});

// o server so vai funcionar se o mongoose tiver uma conexão bem sucedida
app.on('connectionOk', () => {
  app.listen(3030, '0.0.0.0');
});

// Cadastro de usuarios,
