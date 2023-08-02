import AboutMe from "../Components/AboutMe/AboutMe";
import ContactMe from "../Components/ContactMe/ContactMe";
import Experience from "../Components/Experience/Experience";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/Services";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
