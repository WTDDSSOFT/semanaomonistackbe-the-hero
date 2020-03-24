const express = require("express");
const routes = require("./routes"); //importando as rotas.
const cors = require("cors");
//importa o modulo express

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**inform para o app , que estaremos ultilizando json no
 *corpo da requisições
 */

/**
 * rota -  e o conjunto completo
 *recurso - recurso vem dps da /, ele ta atrelado ao banco ou alguma entidade.
 *alguma coisa queremos busca para nossa aplicação.
 */

/**
 * Metodos do HTTP:
 * GET:Busca/listar uma informação do  back-end.
 * POST:Cria uma informação no back-end.
 * PUT: Altera uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parametros
 *  Query Params: parâmetros  nomeados enviados na rota após "?", (filtros, paginação).
 *  Route Params: parâmetros utilizados para identificar recursos.
 *  Request BOdy: corpo da requisição , ultilizado para criar ou altera recusos
 */

/**
 * Banco de dados
 * SQL: MySQL, SQLite, POstgreeSQL, oracle, microsoft SQL Server.(mercado).
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query BUilder:
 */
app.listen(3333);
/**
 * Entidades : algo que vai ser salvo no banco de dados.
 * 1 * ong
 * 2 * caso(incident),
 * Funcionaliades:
 *  login. -ok
 *  cadastro de ONG. -ok
 *  logout de ONG. - fronEnd.
 *  cadastrar novos casos. -ok
 *  deletar casos. -ok
 *  lista casos especificos de uma ONG. -ok
 *  lista todos os casos. -ok
 *  entra em contato com a ONG. -
 */

/**
 * knexjs
 * migrations: cria as tabelas e mantem um historico das tabales no banco.
 * criadas , alteradas, campos, ou seja sabemos quando um tabela foi criada
 * ,alteradas etc.
 */
