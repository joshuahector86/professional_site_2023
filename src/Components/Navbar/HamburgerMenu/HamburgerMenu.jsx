import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "../Navbar";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div>{isMenuOpen ? <FaTimes /> : <FaBars />}</div>
    </div>
  );
}

export default HamburgerMenu;
