const express = require('express');
const cors    = require('cors');
const routes  = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/*
* Rota / Recurso
*/

/*
* Métodos HTTP:
*
* GET: Bscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
 */

/*
 * Tipos de Parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB e etc
 */

 /**
  * Driver: SELECT * from users
  * Query Builder: table('users').select('*').where('1')
  */


app.listen(3333)