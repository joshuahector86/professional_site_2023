import "./Navbar.scss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

function Navbar() {
  // Logic for showing and hiding the navbar on scroll
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [clickOnWindow, setClickOnWindow] = useState(false);
  // const [isScrolling, setIsScrolling] = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // HANDLE SCROLL FOR SETTING SCROLLUP TO TRUE OR FALSE

  const handleWindowClick = () => {
    const state = !clickOnWindow;
    setClickOnWindow(state);
  }; // HANDLE CLICK ON NAVBAR ELEMENT TO CHANGE CLICKONWINDOW TO TRUE OR FALSE

  return (
    <div className={`${scrollUp ? "navbar" : "navbar hidden"} `}>
      <div className="logo-side">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <Link smooth={true} to="home" offset={0}>
          <button onClick={handleWindowClick}>HOME</button>
        </Link>
        <Link smooth={true} to="aboutme" offset={20}>
          <button onClick={handleWindowClick}>ABOUT ME</button>
        </Link>
        <Link smooth={true} to="experience" offset={10}>
          <button onClick={handleWindowClick}>EXPERIENCE</button>
        </Link>
        <Link smooth={true} to="portfolio" offset={-100}>
          <button onClick={handleWindowClick}>PORTFOLIO</button>
        </Link>
        <Link smooth={true} to="contactme" offset={20}>
          <button onClick={handleWindowClick}>CONTACT ME</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
