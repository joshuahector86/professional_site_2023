import "./Navbar.scss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

function Navbar() {
  // Logic for showing and hiding the navbar on scroll
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
  }, [prevScrollPos]); // useEffect stops the infinite looping
  return (
    <div className={scrollUp ? "navbar" : "navbar hidden"}>
      <div className="links">
        <Link smooth={true} to="home" offset={50}>
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
