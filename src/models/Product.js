// precisamos falar qual o schema desta model (quais campo e tipos de valores)
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    // quais os campos
    title: { 
        type: String, // note a caixa alta
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate); // implementando o paginate

mongoose.model('Product', ProductSchema); // registra o Model na app

// agora toda a nossa aplicação vai saber que existe a Model Product 
// e possui todas essas colunas