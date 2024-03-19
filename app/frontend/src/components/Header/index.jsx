import './styles.css';
import uolIcon from "../../assets/uol-icon.png";

function Header() {
  return (
    <header id="header-container">
       <img src={uolIcon} alt="Ícone da UOL" id="uol-icon" />
    </header>
  );
}

export default Header;
