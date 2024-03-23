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
import { Link } from "react-scroll";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">Thanks for visiting my site!</div>
      <div className="link-row">
        <Link smooth={true} to="home" offset={0}>
          <button>Home</button>
        </Link>
        <Link smooth={true} to="aboutme" offset={20}>
          <button>About Me</button>
        </Link>
        <Link smooth={true} to="experience" offset={10}>
          <button>Experience</button>
        </Link>
        <Link smooth={true} to="portfolio" offset={20}>
          <button>Portfolio</button>
        </Link>
        <Link smooth={true} to="contactme" offset={20}>
          <button>Contact me</button>
        </Link>
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
        {new Date().getFullYear()}&nbsp; Dimitri Hector | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
