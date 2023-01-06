class FlexContainerComponent {
  htmlElement;

  constructor() {
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "d-flex gap-3 align-items-baseline";
  }

  addComponents(...components) {
    const htmlElements = components.map((c) => c.htmlElement);
    this.htmlElement.append(...htmlElements);
  }
}

export default FlexContainerComponent;
