import "./Navbar.scss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

function Navbar() {
  // Logic for showing and hiding the navbar on scroll
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [isIdle, setIsIdle] = useState(true); -------- Variable for Navbar Timeout ---/

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
      setIsIdle(false);
    };
    //---------------------- Logic for handle scroll and Navbar timeout ----------------------//
    // let timeout;
    // const handleScrollAndIdle = () => {
    //   handleScroll();
    //   setIsIdle(false);
    //   clearTimeout(timeout);
    //   timeout = setTimeout(() => {
    //     setIsIdle(true);
    //   }, 3000); // Change this value to adjust the idle time (in milliseconds)
    // };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // useEffect stops the infinite looping

  return (
    <div className={scrollUp ? "navbar" : "navbar hidden"}>
      <div className="logo-side">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <Link smooth={true} to="home" offset={0}>
          <button>HOME</button>
        </Link>
        <Link smooth={true} to="aboutme" offset={20}>
          <button>ABOUT ME</button>
        </Link>
        <Link smooth={true} to="experience" offset={10}>
          <button>EXPERIENCE</button>
        </Link>
        <Link smooth={true} to="portfolio" offset={20}>
          <button>PORTFOLIO</button>
        </Link>
        <Link smooth={true} to="contactme" offset={20}>
          <button>CONTACT ME</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
