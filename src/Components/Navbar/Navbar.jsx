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
  let isScrolling;
  let myVariable = 0;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
      console.log("hello i am here");
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", startIdleTimer);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // HANDLE SCROLL FOR SETTING SCROLLUP TO TRUE OR FALSE

  const handleWindowClick = () => {
    const state = !clickOnWindow;
    setClickOnWindow(state);
    setTimeout(setClickOnWindow(false), 2000);
    console.log("handle click was reached");
  }; // HANDLE CLICK ON NAVBAR ELEMENT TO CHANGE CLICKONWINDOW TO TRUE OR FALSE

  function onScrollIdle() {
    // Reset your variable or do any other action you want here
    myVariable = 0;
    console.log("Scrolling is now idle. Variable has been reset to 0.");
  }
  function startIdleTimer() {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(onScrollIdle, 200);
  }

  return (
    <div
      className={`${scrollUp ? "navbar" : "navbar hidden"} ${
        scrollUp && clickOnWindow ? "navbar hidden" : "navbar"
      }`}
    >
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
