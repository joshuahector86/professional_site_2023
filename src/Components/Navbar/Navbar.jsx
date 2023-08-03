import "./Navbar.scss";
import logo from "../../assets/logo.jpg";
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
