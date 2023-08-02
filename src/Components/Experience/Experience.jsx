import "./Experience.scss";
import {
  UndergraduateResearcherContent,
  RoboticsResearcher,
} from "../Experience/ExperienceContent/ExperienceContent";

function Experience() {
  return (
    <div className="experience">
      <div className="experience-title">Experience</div>
      <div className="experience-left-side">
        <UndergraduateResearcherContent />
      </div>
      <div className="experience-right-side">
        <RoboticsResearcher />
      </div>
    </div>
  );
}

export default Experience;
