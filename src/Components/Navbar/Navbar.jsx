import "./Navbar.scss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  function handleClick() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <div className="navbar">
      <div className="logo-side">
        <img src={logo} alt="Logo" />
      </div>
      <div className="toggler" onClick={handleClick}>
        {menuOpen ? <AiOutlineClose /> : <FiMenu />}
      </div>
      {menuOpen ? (
        <div id="navbar-content" className={`links`}>
          <Link smooth={true} to="home" offset={0}>
            <button>HOME</button>
          </Link>
          <Link smooth={true} to="aboutme" offset={20}>
            <button>ABOUT ME</button>
          </Link>
          <Link smooth={true} to="experience" offset={10}>
            <button>EXPERIENCE</button>
          </Link>
          <Link smooth={true} to="portfolio" offset={-100}>
            <button>PORTFOLIO</button>
          </Link>
          <Link smooth={true} to="contactme" offset={20}>
            <button>CONTACT ME</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
