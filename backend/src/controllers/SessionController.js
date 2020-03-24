const connection = require("../database/conection");

module.exports = {
  async create(request, respoonse) {
    const { id } = request.body; //buscando id da ONG.
    //Bucando a ONG do banco de dados.
    const ong = await connection("ongs")
      .select("name")
      .first();
    if (!ong) {
      return response.status(400).json({ error: "No ONG found with this ID:" });
    }
    return respoonse.json(ong);
  }
};
