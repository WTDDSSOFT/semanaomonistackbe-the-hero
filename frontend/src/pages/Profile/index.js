import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
/**
 * useEffect - dispara uma determindad função em um determinado componente
 */
import "./styles.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  //busca o nome da ong
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();
  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      /**
       * Buscando um conjunto de informações do back-end
       */
      .then(response => {
        setIncidents(response.data);
      });
    console.log(ongId);
  }, [ongId]);
  /**remoção de casos */

  async function handleDeleteIncident(id) {
    console.log(id);

    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      console.log(err);
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  function handlelogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incident/new">
          Cadastar novo caso
        </Link>
        <button onClick={handlelogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title} </p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
