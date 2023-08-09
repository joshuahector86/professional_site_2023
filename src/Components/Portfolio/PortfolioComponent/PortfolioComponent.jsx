import "./PortfolioComponent.scss";

import construction_image from "../../../assets/under_construction_image.jpg";
import kryptoo_dash_image from "../../../assets/kryptoniumDash.png";
function FirstProject() {
  return (
    <div className="project-box">
      <div className="project-title">Kryptonium Dash</div>
      <img src={kryptoo_dash_image} alt="under-construction-image-here" />
    </div>
  );
}

function SecondProject() {
  return (
    <div className="project-box">
      <div className="project-title">Project Title</div>
      <img src={construction_image} alt="under-construction-image-here" />
    </div>
  );
}

export { FirstProject, SecondProject };
