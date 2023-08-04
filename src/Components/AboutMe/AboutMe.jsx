import "./AboutMe.scss";
import headshot from "../../assets/photo_of_me.png";

function AboutMe() {
  return (
    <div id="aboutme" className="about-me">
      <img src={headshot} alt="" />
      <div className="about-me-right-side">
        <div className="about-me-title">About Me</div>
        <div className="about-me-text">
          <p>
            Welcome to my site! My preferred name is Dimitri Hector and I do a
            lot of computer science and tech things.
          </p>
          <br />
          <p>
            I am an energetic and passionate individual who is constantly in
            search of new challenges and fun to be had! Outside of my technical
            career I am a professional West Coast Swing dancer and full time
            tech/game nerd. Check out this page for details about my experience.
            Thanks for stopping by!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
