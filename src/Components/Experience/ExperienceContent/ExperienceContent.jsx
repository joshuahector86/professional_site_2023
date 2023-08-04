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

function CiscoSoftwareEngineer() {
  return (
    <div className="experience-content-container">
      <div className="time-worked">July 2021 - Present</div>
      <div className="bullet-points-title">Cisco Software Engineer</div>
      <div className="bullet-points">
        <p>● Software engineer with Cisco’s Innovation sector.</p>
        <p>● Lead Engineer for UI development of multiple projects.</p>
        <p>● Creation of new software tools for internal and external use.</p>
        <p>● Developed SaaS products, and maintained code bases for them.</p>
        <p>● Developed prototypes for company and shareholder demo.</p>
        <p>
          ● Planned and developed large scale architecture for commercial
          software.
        </p>
        <p>
          ● Experience with being a scrum master, UX designer, and software
          marketing.
        </p>
      </div>
    </div>
  );
}

function MastersDegree() {
  return (
    <div className="experience-content-container">
      <div className="bullet-points-title">
        Howard University Master's Degree
      </div>
      <div className="bullet-points">
        Howard University <br />
        Washington, DC <br />
        College of Electrical Engineering and Computer Science <br />
        Master of Science in Computer Science <br />
        Major: Computer Science & Engineering
      </div>
    </div>
  );
}

function BachelorsDegree() {
  return (
    <div className="experience-content-container">
      <div className="bullet-points-title">
        Ithaca College Bachelor's Degree
      </div>
      <div className="bullet-points">
        Ithaca College <br />
        Ithaca, NY <br />
        School of Humanities and Sciences <br />
        Bachelors of Science in Physics <br />
        Major: Physics & Civil Engineering
      </div>
    </div>
  );
}

export {
  UndergraduateResearcherContent,
  RoboticsResearcher,
  CiscoSoftwareEngineer,
  MastersDegree,
  BachelorsDegree,
};
