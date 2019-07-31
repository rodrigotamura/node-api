const express = require('express');

const routes = express.Router();

/* declaração de rotas sem estruturar as pastas, ou seja, desrespeitando o MVC

// toda vez que o usuario acessar a rota raiz
    // req simboliza a requisição feita no servidor, contendo todos os detalhes e infos (params, header, body, auth, etc.)
    // res simboliza a resposta que vamos dar pra requisição. Temos que SEMPRE retornar ele

routes.get('/', (req, res) => {
    
    // Inserindo um registro
    Product.create({
        title: 'Reactive Native',
        description: 'Reactive Native is fine!',
        url: 'http://github.com/facebook/react-native'
    });
    

    return res.send('Hi'); // manda pra tela!
}); 
*/

// abaixo respeitando a arquitetura MVC
const Products = require('./controllers/ProductController');

routes.get('/products', Products.index);

module.exports = routes; // para ser importado no nosso server.js