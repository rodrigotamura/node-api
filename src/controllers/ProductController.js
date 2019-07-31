const mongoose = require('mongoose'); // importamos pq iremos lidar com BD

const Product = mongoose.model('Product'); // agora teremos acesso ao Product para o CRUD

// exportando as funÇões
module.exports = {
    async index(req, res){ // fará a listagem de todos os registro
        const products = await Product.find(); // armazenando todos os produtos do BD

        return res.json(products); // retorna em estrutura JSON 
    }
}