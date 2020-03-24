const connection = require("../database/conection");

module.exports = {
  /**
   *  retorna os casos especificos de uma ong
   */
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .where("id", ong_id)
      .select("*");
    return response.json(incidents);
  }
};
