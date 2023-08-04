import { useStoreWIP } from "../../ZustandStores/WorkInProgressStore/WorkInProgressDialog";
import WorkInProgressDialog from "../DialogBox/OnSubmitPopUp/WorkInProgressDialog";
import "./ContactMe.scss";

function ContactMe() {
  const WIPDialogOpen = useStoreWIP((state) => state.isWIPDialogOpen);
  const openDialog = useStoreWIP((state) => state.openWIP);
  function handleSubmit() {
    openDialog();
  }
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
            placeholder="Note: Click Submit before writing"
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {WIPDialogOpen ? <WorkInProgressDialog /> : null}
    </div>
  );
}

export default ContactMe;
