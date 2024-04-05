import React, { useState, useEffect } from "react";
import { requestClients } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import SubHeader from "../../components/SubHeader";
import ClientList from "../../components/ClientList";
import { formatCPF, formatTelephone, formatStatus } from "../../utils/formatters";
import "./styles.css";

function HomePage() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const handleNewClient = () => {
    navigate("/tela-edicao");
  };

  const handleEditClient = (client) => {
    navigate("/tela-edicao", { state: { client } });
  };
  
  async function fetchClients() {
    try {
      const clientsData = await requestClients();
      const formattedClients = clientsData.map(client => ({
        ...client,
        cpf: formatCPF(client.cpf),
        telephone: formatTelephone(client.telephone),
        status: formatStatus(client.status)
      }));
      setClients(formattedClients);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchClients();
  }, []);

  //teste
  return (
    <div id="home-container">
      <div id="home-content">
        <SubHeader />
        <section id="home-section">
          <section id="home-titles-container">
            <h3 id="home-title">Listagem de usuários</h3>
            <p id="home-subtitle">
              Escolha um cliente para visualizar os detalhes
            </p>
          </section>
          <button id="newClient-button" onClick={handleNewClient}>
            Novo cliente
          </button>
        </section>
        <div id="users-list-container">
          <ClientList clients={clients} handleEditClient={handleEditClient} />
        </div>
        <p id="count-clients">Exibindo {clients.length} cliente{clients.length !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
}

export default HomePage;
HomePage.js
