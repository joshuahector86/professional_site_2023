import "./PortfolioComponent.scss";

import construction_image from "../../../assets/under_construction_image.jpg";

function FirstProject() {
  return (
    <div className="project-box">
      <div className="project-title">Project Title</div>
      <img src={construction_image} alt="under-construction-image-here" />
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
