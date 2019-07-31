/**
 * Toda vez que formos alterar algum arquivo no nosso back-end temos que reiniciar 
 * manualmente o server.
 * Para implementar o live reload temos que instalar o NODEMON
 *  > npm install -D nodemon
 * Depois precisamos criar um script dentro do package.json chamado "dev" (ou qualquer
 * outro nome):
 *       "dev": "nodemon server.js"
 * Daí é só executar > npm run dev
 */
const express = require('express'); // instanciando o Express

const app = express();


// toda vez que o usuario acessar a rota raiz
    // req simboliza a requisição feita no servidor, contendo todos os detalhes e infos (params, header, body, auth, etc.)
    // res simboliza a resposta que vamos dar pra requisição
app.get('/', (req, res) => {
    res.send('Hello Rodrigo!'); // manda pra tela!
}); 

app.listen(3001); // ouvir esta porta no navegador http://localhost:3001