import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">Thanks for visiting my site!</div>
      <div className="link-row">
        <button>Home</button>
        <button>About Me</button>
        <button>Skills</button>
        <button>Experience</button>
        <button>Portfolio</button>
        <button>Contact Me</button>
      </div>
      <div className="social-media-row">
        <FacebookShareButton
          url={"https://www.joshuahector.com/"}
          quote={"Dimitri Hector's Website"}
          hashtag="#FullStack"
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://www.joshuahector.com/"}
          quote={"Dimitri Hector's Website"}
          hashtag="#FullStack"
        >
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <RedditShareButton
          url={"https://www.joshuahector.com/"}
          quote={"Dimitri Hector's Website"}
          hashtag="#FullStack"
        >
          <RedditIcon size={36} />
        </RedditShareButton>
        <LinkedinShareButton
          url={"https://www.joshuahector.com/"}
          quote={"Dimitri Hector's Website"}
          hashtag="#FullStack"
        >
          <LinkedinIcon size={36} />
        </LinkedinShareButton>
      </div>
      <div className="copyright-line">
        Copyright &copy;
        {new Date().getFullYear()}&nbsp; Joshua Hector | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
