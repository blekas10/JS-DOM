class GuestFormComponent {
  htmlElement;
  onSubmit;
  nameInput;
  surnameInput;
  veganInput;
  formName;
  submitBtn;

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
      <button type="submit" class="btn btn-success px-4">Pridėti</button>
    </div>
  `;
    this.onSubmit = onSubmit;
    this.nameInput = this.htmlElement.querySelector("[name=name]");
    this.surnameInput = this.htmlElement.querySelector("[name=surname]");
    this.veganInput = this.htmlElement.querySelector("[name=vegan]");
    this.formName = this.htmlElement.querySelector("h2");
    this.submitBtn = this.htmlElement.querySelector("button");

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

  enableEditing = ({ name, surname, vegan }) => {
    this.nameInput.value = name;
    this.surnameInput.value = surname;
    this.veganInput.checked = vegan;
    this.formName.innerText = "Update Car";
    this.submitBtn.innerText = "Update car";
    this.submitBtn.className = "btn btn-warning w-100";
  };

  disableEditing = () => {
    this.htmlElement.reset();
    this.formName.innerText = "Create Car";
    this.submitBtn.className = "btn btn-success w-100";
  };
}

export default GuestFormComponent;
