import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUser, createUser } from "../../services/requests";
import SubHeader from "../../components/SubHeader";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import Modal from "../../components/Modal";
import {
  unformatCPF,
  unformatTelephone,
  unformatStatus,
} from "../../utils/formatters";
import "./styles.css";

function EditPage() {
  const { state } = useLocation();
  const client = state?.client || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: client.name || "",
    email: client.email || "",
    cpf: client.cpf || "",
    telephone: client.telephone || "",
    status: client.status || "status",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBack = () => {
    navigate("/tela-inicial");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSuccess = () => {
    setFormData({
      name: "",
      email: "",
      cpf: "",
      telephone: "",
      status: "status",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const unformattedData = formatFormData(formData);

      if (client.id) {
        await updateUser(client.id, unformattedData);
        setModalMessage("Dados alterados com sucesso!");
      } else {
        await createUser(unformattedData);
        setModalMessage("Novo usuário cadastrado com sucesso!");
      }

      setIsModalOpen(true);
      handleSuccess();
    } catch (error) {
      setModalMessage(error.message);
      setIsModalOpen(true);
    }
  };

  const formatFormData = (formData) => {
    const { cpf, telephone, status, ...rest } = formData;
    return {
      ...rest,
      cpf: unformatCPF(cpf),
      telephone: unformatTelephone(telephone),
      status: unformatStatus(status),
    };
  };

  return (
    <div id="edit-container">
      <div id="edit-content">
        <SubHeader />
        <section id="edit-section">
          <h2 className="edit-title">
            {client.id ? "Editar usuário" : "Novo usuário"}
          </h2>
          <p className="edit-subtitle">
            {client.id
              ? "Informe os campos a seguir para atualizar o usuário"
              : "Informe os campos a seguir para criar um novo usuário"}
          </p>
        </section>
        <form id="edit-form" onSubmit={handleSubmit}>
          <InputField
            placeholder="Nome"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            placeholder="CPF"
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            mask="999.999.999-99"
          />
          <InputField
            placeholder="Telefone"
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            mask="(99) 99999-9999"
          />
          <SelectField
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              {value: "Status"},
              { value: "Ativo"},
              { value: "Inativo"},
              { value: "Aguardando ativação"},
              { value: "Desativado"},
            ]}
          />
          <div id="form-buttons">
            <button id="submit-button" type="submit">
              {client.id ? "Salvar" : "Criar"}
            </button>
            <button id="goback-button" type="button" onClick={handleBack}>
              Voltar
            </button>
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalMessage && <p>{modalMessage}</p>}
      </Modal>
    </div>
  );
}

export default EditPage;
