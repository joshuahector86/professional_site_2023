import "./Portfolio.scss";
import {
  FirstProject,
  SecondProject,
} from "./PortfolioComponent/PortfolioComponent";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-title">Portfolio</div>
      <div className="portfolio-component-container">
        <FirstProject />
        <SecondProject />
        <SecondProject />
        <SecondProject />
      </div>
    </div>
  );
}

export default Portfolio;
