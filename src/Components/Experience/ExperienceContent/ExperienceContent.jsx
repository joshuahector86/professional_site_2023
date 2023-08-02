import "./ExperienceContent.scss";

function UndergraduateResearcherContent() {
  return (
    <div className="experience-content-container">
      <div className="time-worked">June 2016 - May 2019</div>
      <div className="bullet-points-title">
        Ithaca College Undergraduate Researcher
      </div>
      <div className="bullet-points">
        <p>
          ● Created programs for system requirements of experiments that were
          done in the lab.
        </p>
        <p>
          ● Developed problem solving skills while designing and executing
          experiments.
        </p>
        <p>● Documented the building and use of a Mobius 3π strip.</p>
        <p>
          ● Extensive use of MATLAB and Latex for data analysis and technical
          writing.
        </p>
        <p>
          ● Managed multiple projects across varying labs of varying
          disciplines.
        </p>
        <p>
          ● Created publicity for the lab work done by appearing in magazines,
          giving talks, and creating video documentation.
        </p>
      </div>
    </div>
  );
}

function RoboticsResearcher() {
  return (
    <div className="experience-content-container">
      <div className="time-worked">August 2020 - April 2021</div>
      <div className="bullet-points-title">Robotics Researcher</div>
      <div className="bullet-points">
        <p>● Designed simulations in Unity for robotic research.</p>
        <p>
          ● Developed problem solving skills while designing and executing
          experiments.
        </p>
        <p>● Collected data for analysis and experimentation.</p>
        <p>
          ● Developed security for a robotics experiment (a paper was published
          in the IEEE journal for this work)
        </p>
        <p>
          ● Communicated with a team of professionals to relay work plans,
          milestones, status, and overall results in presentations.
        </p>
      </div>
    </div>
  );
}

export { UndergraduateResearcherContent, RoboticsResearcher };
