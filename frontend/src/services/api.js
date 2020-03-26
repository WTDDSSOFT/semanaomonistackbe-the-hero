import axios from "axios";
//conectando com nossa api
const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
