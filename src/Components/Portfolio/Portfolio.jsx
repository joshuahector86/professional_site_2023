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
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-title">Portfolio</div>
      <div onClick={handleSubmit} className="portfolio-component-container">
        <FirstProject />
        <SecondProject />
        <SecondProject />
        <SecondProject />
      </div>
      {WIPDialogOpen ? <WorkInProgressDialog /> : null}
    </div>
  );
}

export default Portfolio;
