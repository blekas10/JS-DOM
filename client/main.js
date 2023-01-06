import GuestListTable from "./components/guest-list-table.js";
import ContainerComponent from "./components/container-component.js";
import ApiServises from "./services/api-servises.js";
import AlertComponent from "./components/alert-component.js";
import Header from "./components/header-component.js";

const rootHtmlElement = document.querySelector("#root");

let guestListTable;
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

(async () => {
  try {
    const guests = await ApiServises.getGuests();
    guestListTable = new GuestListTable(guests, handleGuestDelete);
    containerComponent.addComponents(guestListTable);

    console.log("all good");
    console.table(guests);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
