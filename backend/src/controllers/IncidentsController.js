const connection = require("../database/conection");

module.exports = {
  /**
   *
   */

  async create(resquest, response) {
    const { title, description, value } = resquest.body;

    /** id da ong
     * tambem representa qual ong esta logada na aplicação.
     */

    const ong_id = resquest.headers.authorization; //acessa o id da ong.
    /**
     * resquest.headers - quarda informações do contexto da requisição
     * vem dados do usuario, idimoas, autenticação etc.
     */
    const [id] = await connection("incidents").insert({
      //insere os dado no db
      title,
      description,
      value,
      ong_id
    });
    return response.json({ id });
  },
  /**
   * lista os dados
   * */
  async index(resquest, response) {
    /**
     * Esquema de Paginação
     *
     * */
    const { page = 1 } = resquest.query;
    /**
     * Retorna a quantidade de casos
     */
    const count = await connection("incidents").count();
    console.log(count);

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);
    /**
     * Retorna o total de casos pelo header(cabecalho da requisição).
     */
    response.header("X-Total-Count", count["count(*)"]);

    //lista todos os dados no db
    return response.json(incidents);
  },
  /**
   * deleta os dados de casos
   */
  async delete(resquest, response) {
    //pegando o id que vem la de dentro do request
    const { id } = resquest.params;
    //acessa o id da ong.
    const ong_id = resquest.headers.authorization;
    /**busca o incidents da tabela no banco incidents */
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    //verifica se o ong_id e igual no banco
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "operation not permitted" });
    }
    /**
     * deleta do banco
     */
    await connection("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
