const connection = require("../database/conection");
const crypto = require("crypto");
/**
 * aqui fica a logica que estava na rota will
 */
module.exports = {
  /**
   * Cria e inseri no banco os dados
   */
  async create(request, response) {
    //   const data = request.body;

    const { name, email, whatsapp, city, uf } = request.body;
    //   console.log(data);
    /**
     * gera caracteres aleatorios
     */
    const id = crypto.randomBytes(4).toString("HEX");
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return response.json({ id });
  },
  /**
   * lista os dados no banco
   */
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  }
};
