import "./ContactMe.scss";

function ContactMe() {
  return (
    <div id="contactme" className="contact-me">
      <div className="contact-me-title">Contact Me</div>
      <div className="contact-me-form-container">
        <div className="form-left-side">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="form-right-side">
          <input type="text" placeholder="Email Subject" />
          <input
            className="message-input"
            type="text"
            placeholder="Email Message"
          />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default ContactMe;
