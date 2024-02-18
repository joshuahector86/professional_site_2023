import "./Header.scss";
import logo from "../../assets/logo.jpg";
import Typed from "typed.js";

function Header() {
  return (
    <div id="home" className="header ">
      <img src={logo} alt="logo enlarged" />
      <div className="dancing-dev-title">Dimitri Hector</div>
    </div>
  );
}

export default Header;
