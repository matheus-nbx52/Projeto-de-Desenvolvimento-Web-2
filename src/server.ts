import express from 'express';
// import StatusCodes from 'http-status-codes';
// rota de usuarios
import userRoutes from './routes/UserRoutes';

const app = express();

// Faz o form eo Json funcionar

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000);

// Cadastro de usuarios,

// Feito hj mongoose , dotenv
