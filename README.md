# Projeto-de-Desenvolvimento-Web-2


## ✨ Sobre o projeto

<h4>Site de visualização de vídeos de diversos jogos (clipes), com possibilidade do usuário já cadastrado comentar, dar like e fazer upload de vídeos, trocar foto do perfil, alterar nome de usuário, seguir outros usuários, como também poder compartilhar.</h4>

## 📌 Objetivos: 

- [ ] interface geral
- [x] cadastro com email
- [ ] like, comentário(editar e apagar) e compartilhar 
- [x] alterar nome de usuário e foto.
- [ ] Postar videos

## ⚙️ Configuraçõs do projeto
Antes de iniciar o projeto deve ser feita algumas configurações

1-) Configuração do banco de dados(Mongodb):
- Deve ser criado um arquivo .env dentro do arquivo .env ficara a url de conexão 
       
        - CONNECT_STRING = String de conexão mongodb

2-) Configuração do banco de dados(mySql):
- no arquivo db.ts deve ser posto as configs do seu banco de dados 
       
        - 'DatabaseName',
        'User',
        'Password',{
        dialect:'mysql',
        host:'link/localhos', // O local onde esta o banco
        port:numeroDaPorta
    }   
    

## 🚀 Como Iniciar o projeto? 

#### Instalando as dependências 
    - npm install 


#### Rodando o projeto 
    - npm start

## Estrutura do projeto 

<img src='./ReadmeImages/detals.png'>

## Estrutura do banco de dados sql 

<img src='./ReadmeImages/databaseSql.png'>

## Rodando o projeto Com docker composer 
  - docker-compose up --build -d
  
<p style='color:red'>Obs: Rodar o npx tsc nas pastas user e comments para que sejam criadas as dists</p>

