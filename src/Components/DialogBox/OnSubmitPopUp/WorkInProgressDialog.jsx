import { useStoreWIP } from "../../../ZustandStores/WorkInProgressStore/WorkInProgressDialog";
import "./WorkInProgressDialog.scss";

function WorkInProgressDialog() {
  const closeDialog = useStoreWIP((state) => state.closeWIP);

  function onClose() {
    closeDialog();
  }
  return (
    <div className="work-in-progress-dialog">
      <div className="work-in-progess-container">
        <h1>Work In Progress!</h1>
        <p>
          Sorry! This portion of the site isn't done yet. Please come back later
          :)
        </p>
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default WorkInProgressDialog;
