import "./Experience.scss";
import {
  CiscoSoftwareEngineer,
  MastersDegree,
  BachelorsDegree,
  RoboticsAndSyberSecurityEngineer,
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
            <RoboticsAndSyberSecurityEngineer />
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
