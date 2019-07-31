const mongoose = require('mongoose'); // importamos pq iremos lidar com BD

const Product = mongoose.model('Product'); // agora teremos acesso ao Product para o CRUD

// exportando as funÇões
module.exports = {
    async index(req, res){ // fará a listagem de todos os registro
        // usando desestruturação, vamos pegar o valor de http://localhost:3001/api/products?page=2
        const { page = 1 } = req.query; 
        // veja que utilizando a desestruturaÇão podemos definir um valor padrão, este caso o 1

        // const products = await Product.find(); // armazenando todos os produtos do BD (sem paginate)
        const products = await Product.paginate(
                                            {}, // opÇão de filtros 
                                            {
                                                page, // pagina atual,
                                                limit: 10 // quantos registros por pag.
                                            }); // armazenando todos os produtos do BD (com paginate)

        return res.json(products); // retorna em estrutura JSON 
    },

    async show(req, res) {
        // usamos o req para resgatar o id
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },


    async store(req, res){ // novo registro
        const product = await Product.create(req.body);
        // req.body seria o conteudo do corpo da requisiÇão
        return res.json(product); // retorna dados do registro que foi criado
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // busca e atualiza
        // a opção new: true faz com que a constante product retorne os dados alterados
        // se eu não passar este parâmetro, a constante iria receber os dados antes de ter atualizado

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); // em branco mesmo
    }
}