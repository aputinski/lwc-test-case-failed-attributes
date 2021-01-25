import Component from "x/component";

customElements.define("x-component", Component.CustomElementConstructor);

describe("x-component", () => {
  it("works", () => {
    let element = document.createElement("x-component");
  });
});
