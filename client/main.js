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

const containerComponent = new ContainerComponent();
const alertComponent = new AlertComponent();

const header = new Header();

containerComponent.addComponents(header, alertComponent);

rootHtmlElement.append(containerComponent.htmlElement);

const handleGuestDelete = async (id) => {
  try {
    await ApiServises.deleteGuests(id);
    const guests = await ApiServises.getGuests();
    guestListTable.renderGuests(guests);
  } catch (error) {
    alertComponent.show(error.message);
  }
};
const handleGuestCreate = async (guestProps) => {
  try {
    await ApiServises.createGuest(guestProps);
    const guests = await ApiServises.getGuests();
    guestListTable.renderGuests(guests);
  } catch (error) {
    alertComponent.show(error.message);
  }
};

(async () => {
  try {
    const guests = await ApiServises.getGuests();
    guestFormComponent = new GuestFormComponent(handleGuestCreate);
    guestListTable = new GuestListTable(guests, handleGuestDelete);
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(guestFormComponent, guestListTable);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
