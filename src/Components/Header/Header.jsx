import "./Header.scss";
import logo from "../../assets/logo.jpg";
import Typed from "typed.js";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo enlarged" />

      <div className="dancing-dev-title">The Dancing Developer</div>
    </div>
  );
}

export default Header;
