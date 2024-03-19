import './styles.css';
import subheaderIcon from "../../assets/subheader-icon.png";

function SubHeader() {
  return (
    <section id="subheader-container">
        <img src={subheaderIcon} alt="Ícone de um usuário agênero" id="subheader-icon" />
        <h1 id="title">Painel de Clientes</h1>
    </section>
  );
}

export default SubHeader;
