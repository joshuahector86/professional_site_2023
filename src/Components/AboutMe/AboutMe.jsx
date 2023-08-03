import "./AboutMe.scss";
import headshot from "../../assets/photo_of_me.png";

function AboutMe() {
  return (
    <div className="about-me">
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
            search of new challenges and fun to be had! I have experience in
            full stack development, security, research, mathematics,
            architectural design. Outside of my technical career I am a
            professional West Coast Swing dancer and full time tech/game nerd.
            Check out this page for details about my experience and feel free to
            reach out to me using the form at the bottom of the page. Thanks for
            stopping by!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
