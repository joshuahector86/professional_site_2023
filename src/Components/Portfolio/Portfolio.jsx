import { useStoreWIP } from "../../ZustandStores/WorkInProgressStore/WorkInProgressDialog";
import WorkInProgressDialog from "../DialogBox/OnSubmitPopUp/WorkInProgressDialog";
import "./Portfolio.scss";
import {
  FirstProject,
  SecondProject,
} from "./PortfolioComponent/PortfolioComponent";

function Portfolio() {
  const WIPDialogOpen = useStoreWIP((state) => state.isWIPDialogOpen);
  const openDialog = useStoreWIP((state) => state.openWIP);
  function handleSubmit() {
    openDialog();
  }
  // Avoids security issue with just using '_blank'
  const OpenURLInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  // URL onClcik functions
  function ToKryptoniumDash() {
    OpenURLInNewTab(
      "https://joshuahector86.github.io/crypto-dashboard-remake/"
    );
  }

  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-title">Portfolio</div>
      <div className="portfolio-component-container">
        <div onClick={ToKryptoniumDash}>
          <FirstProject />
        </div>
        <div onClick={handleSubmit}>
          <SecondProject />
        </div>

        <div onClick={handleSubmit}>
          <SecondProject />
        </div>
        <div onClick={handleSubmit}>
          <SecondProject />
        </div>
      </div>
      {WIPDialogOpen ? <WorkInProgressDialog /> : null}
    </div>
  );
}

export default Portfolio;
