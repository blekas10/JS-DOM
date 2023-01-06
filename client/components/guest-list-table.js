class GuestListTable {
  htmlElement;
  tbody;

  constructor(guests) {
    this.htmlElement = document.createElement("table");
    this.htmlElement.className = "table table-success table-striped";
    this.htmlElement.innerHTML = `
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Vegan?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>`;
    this.tbody = this.htmlElement.querySelector("tbody");
    this.renderGuests(guests);
  }

  renderRow({ id, name, surname, vegan }) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${surname}</td>
      <td>${vegan}</td>
      <td class="d-flex justify-content-end">
        <button class="btn btn-sm btn-danger">✕</button>
      </td> `;

    const deleteBtn = tr.querySelector(".btn-danger");
    deleteBtn.addEventListener("click", () => {
      console.log(`trinamas elementas ${id}`);
    });

    return tr;
  }

  renderGuests(guests) {
    const guestRowHtmlElement = guests.map(this.renderRow);

    this.tbody.innerHTML = null;
    this.tbody.append(...guestRowHtmlElement);

    // const deleteBtn = this.
  }
}

export default GuestListTable;
