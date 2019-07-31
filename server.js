const express = require('express'); // instanciando o Express
const mongoose = require('mongoose'); // instanciando o Mongoose
const requireDir = require('require-dir'); // require-dir

// Iniciando o App
const app = express();

// Iniciando o Mongo
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
// Se tivesse usuario e senha a connection string ficaria:
// mongodb://user@pass...
// nodeapi seria o nome da base/schema
// useNewUrlParser é uma opção para versões mais antigas. Se der erro podemos tirar isso.
// rode a aplicação e veja se esta tudo ok.

// require('./src/models/Product'); // essa linha vai executar o registro da Model no app
// como vamos utilizar a lib require-dir então não precisremos mais importar as models
// isoladamente
requireDir('./src/models');


// ========== ROTAS ============
app.use('/api', require('./src/routes'));
// o use() é como se fosse um wildcard - curinga - que recebe TODO tipo de requisição,
// não somente requisições GET ou POST, mas todas!
// Então todas as requisições que serão feitas na rota api (que é opcional, pode ser colocado
// outra coisa ou até nada), nós vamos mandar para ./src/routes
// ======= FIM DAS ROTAS =======

app.listen(3001); // ouvir esta porta no navegador http://localhost:3001