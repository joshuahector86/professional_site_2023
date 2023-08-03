import "./Experience.scss";
import {
  UndergraduateResearcherContent,
  RoboticsResearcher,
  CiscoSoftwareEngineer,
  MastersDegree,
  BachelorsDegree,
} from "../Experience/ExperienceContent/ExperienceContent";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-inner-container">
        <div className="experience-title">Experience</div>
        <div className="experience-sub-title1">Professional</div>

        <div className="experience-left-side">
          <CiscoSoftwareEngineer />
        </div>
        <div className="experience-right-side">
          <RoboticsResearcher />
        </div>
        <div className="experience-left-side">
          <UndergraduateResearcherContent />
        </div>
        <div className="experience-sub-title2">Education</div>
        <div className="education-container">
          <MastersDegree />
          <BachelorsDegree />
        </div>
      </div>
    </div>
  );
}

export default Experience;
