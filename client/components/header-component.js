class Header {
  htmlElement;
  constructor() {
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "text-center text-uppercase p-4";
    this.htmlElement.innerHTML = `<h1>Svečių sarašas</h1>`;
  }
}

export default Header;
