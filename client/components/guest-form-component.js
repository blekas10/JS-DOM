class GuestFormComponent {
  htmlElement;
  onSubmit;

  constructor(onSubmit) {
    this.htmlElement = document.createElement("form");
    this.htmlElement.className = "shadow p-5";
    this.htmlElement.innerHTML = `
    <h2 class="text-uppercase text-center">Pridėti svečią</h2>
    <div class="mb-3">
      <label for="name" class="form-label">Vardas</label>
      <input type="text" class="form-control" id="name" name="name"/>
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">Pavardė</label>
      <input type="text" class="form-control" id="surname" name="surname" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="vegan" name="vegan" />
      <label class="form-check-label" for="vegan"
        >Reikalingas veganiškas meniu?</label
      >
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-primary px-4">Pridėti</button>
    </div>
  `;
    this.onSubmit = onSubmit;

    this.htmlElement.addEventListener("submit", this.handleSubmit);
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = {
      name: formData.get("name"),
      surname: formData.get("name"),
      vegan: Boolean(formData.get("vegan")),
    };
    this.onSubmit(values);
  };
}

export default GuestFormComponent;
