import GuestListTable from "./components/guest-list-table.js";
import ContainerComponent from "./components/container-component.js";
import ApiServises from "./services/api-servises.js";
import AlertComponent from "./components/alert-component.js";
import GuestFormComponent from "./components/guest-form-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import Header from "./components/header-component.js";

const rootHtmlElement = document.querySelector("#root");

let guestListTable;
let guestFormComponent;
let guests;
let editedRowID = null;

const containerComponent = new ContainerComponent();
const alertComponent = new AlertComponent();

const header = new Header();

containerComponent.addComponents(header, alertComponent);

rootHtmlElement.append(containerComponent.htmlElement);

const handleGuestDelete = async (id) => {
  try {
    await ApiServises.deleteGuests(id);
    guests = await ApiServises.getGuests();
    guestListTable.renderGuests(guests, editedRowID);
  } catch (error) {
    alertComponent.show(error.message);
  }
};
const handleGuestCreate = async (guestProps) => {
  try {
    await ApiServises.createGuest(guestProps);
    guests = await ApiServises.getGuests();
    guestListTable.renderGuests(guests, editedRowID);
  } catch (error) {
    alertComponent.show(error.message);
  }
};
const handleGuestUpdate = async (guestProps) => {
  try {
    await ApiServises.updateGuest(guestProps);
    guests = await ApiServises.getGuests();
    guestListTable.renderGuests(guests, editedRowID);
  } catch (error) {
    alertComponent.show(error.message);
  }
};

const handleGuestEdit = (guestProps) => {
  if (editedRowID === guestProps.id) editedRowID = null;
  else editedRowID = guestProps.id;
  guestListTable.renderGuests(guests, editedRowID);

  if (editedRowID === null) {
    guestFormComponent.disableEditing();
  } else {
    guestFormComponent.enableEditing(guestProps);
  }
};

(async () => {
  try {
    guests = await ApiServises.getGuests();
    guestFormComponent = new GuestFormComponent(handleGuestCreate);
    guestListTable = new GuestListTable(
      guests,
      handleGuestDelete,
      handleGuestEdit
    );
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(guestFormComponent, guestListTable);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
