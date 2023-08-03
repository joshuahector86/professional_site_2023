import "./Navbar.scss";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-side">
        <img src={logo} alt="Logo" />
      </div>
      <div className="link-side">
        <button>HOME</button>
        <button>AOUT ME</button>
        <button>SKILLS</button>
        <button>EXPERIENCE</button>
        <button>PORTFOLIO</button>
        <button>CONTACT ME</button>
      </div>
    </div>
  );
}

export default Navbar;
