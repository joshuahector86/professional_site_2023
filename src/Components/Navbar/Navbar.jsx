import "./Navbar.scss";
import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../../assets/logo.jpg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClick() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <div className="navbar">
      <div onClick={handleClick} className="logo-side">
        <img src={logo} alt="Logo" />
      </div>
      <div className="toggler" onClick={handleClick}>
        {menuOpen ? <AiOutlineClose /> : <FiMenu />}
      </div>
      {menuOpen ? (
        <div className={`links`}>
          <Link smooth={true} to="home" offset={0}>
            <button onClick={handleClick}>HOME</button>
          </Link>
          <Link smooth={true} to="aboutme" offset={20}>
            <button onClick={handleClick}>ABOUT ME</button>
          </Link>
          <Link smooth={true} to="experience" offset={10}>
            <button onClick={handleClick}>EXPERIENCE</button>
          </Link>
          <Link smooth={true} to="portfolio" offset={-100}>
            <button onClick={handleClick}>PORTFOLIO</button>
          </Link>
          <Link smooth={true} to="contactme" offset={20}>
            <button onClick={handleClick}>CONTACT ME</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
