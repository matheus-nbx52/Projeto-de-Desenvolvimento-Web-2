import express from 'express';
// import StatusCodes from 'http-status-codes';
// rota de usuarios
import * as dotenv from 'dotenv';

const app = express();
dotenv.config(); // Permite o uso do dotenvs

// Faz o form eo Json funcionar

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cadastro de usuarios,
