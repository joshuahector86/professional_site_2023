import "./Experience.scss";
import {
  UndergraduateResearcherContent,
  RoboticsResearcher,
  CiscoSoftwareEngineer,
  MastersDegree,
  BachelorsDegree,
  HowardTechResearcher,
} from "../Experience/ExperienceContent/ExperienceContent";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-inner-container">
        <div className="experience-title">Experience</div>
        <div className="experience-sub-title1">Professional</div>
        <div className="experience-holder">
          <div className="experience-tab">
            <CiscoSoftwareEngineer />
          </div>
          <div className="experience-tab">
            <HowardTechResearcher />
          </div>
          <div className="experience-tab">
            <RoboticsResearcher />
          </div>

          <div className="experience-tab">
            <UndergraduateResearcherContent />
          </div>
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
