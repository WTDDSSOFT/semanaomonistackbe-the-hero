const express = require("express");
/**
 * armazena as rotas
 */
const routes = express.Router();

const OngController = require("./controllers/OngController");
const InciIentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

/**
 * Rota de login da ONG
 */
routes.post("/sessions", SessionController.create);
/**
 * rota que lista as ongs cadastradas no banco
 */
routes.get("/ongs", OngController.index);
/**
 * rota que inseri as ongs no banco de dados.
 */
routes.post("/ongs", OngController.create);
/**
 * rota que inseri as ongs no banco de dados.
 */
routes.get("/profile", ProfileController.index);
/**
  * rota que inseri as casos no banco de dados.

 */
routes.get("/incidents", InciIentsController.index);
/**
 * rota que cria os casos cadastradas no banco

 */
routes.post("/incidents", InciIentsController.create);

routes.delete("/incidents/:id", InciIentsController.delete);

/**
 * Isso e mo meso, que o codigo estava aqui, porem agora o codigo
 * se encontra no controller
 */
module.exports = routes;
/**
 * Exportando as rotas para o index.js
 */
