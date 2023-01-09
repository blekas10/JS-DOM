class GuestListTable {
  htmlElement;
  tbody;
  onDelete;
  onEdit;
  editedRowID;

  constructor(guests, onDelete, onEdit) {
    this.htmlElement = document.createElement("table");
    this.htmlElement.className = "table table-striped";
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
    this.onDelete = onDelete;
    this.onEdit = onEdit;
    this.editedRowID = null;
    this.renderGuests(guests, null);
  }

  renderRow = (guest) => {
    const { id, name, surname, vegan } = guest;
    const tr = document.createElement("tr");
    if (id === this.editedRowID) {
      tr.classList.add("bg.edited");
    }
    tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${surname}</td>
      <td>${vegan}</td>
      <td class="d-flex justify-content-end gap-2">
        <button class="btn btn-sm btn-warning">↻</button>
        <button class="btn btn-sm btn-danger">✕</button>
      </td> `;

    const deleteBtn = tr.querySelector(".btn-danger");
    deleteBtn.addEventListener("click", () => this.onDelete(id));

    const updateBtn = tr.querySelector(".btn-warning");
    updateBtn.addEventListener("click", () => this.onEdit(guest));

    return tr;
  };

  renderGuests(guests, editedRowID) {
    this.editedRowID = editedRowID;
    const guestRowHtmlElement = guests.map(this.renderRow);

    this.tbody.innerHTML = null;
    this.tbody.append(...guestRowHtmlElement);
  }
}

export default GuestListTable;
