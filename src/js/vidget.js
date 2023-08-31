export default class Vidget {
  constructor(validCard) {
    this.validCard = validCard;
    this.input = document.querySelector(".input");
    this.conteiner = document.querySelector(".box-conteiner");
  }

  vidget(bool) {
    return bool ? this.cardNumberTrue() : this.cardNumberFalse();
  }

  cardNumberTrue() {
    const div = document.createElement("div");
    div.classList.add("valid");
    div.innerHTML = `
      <div class="valid-true">
        <h2>Card is valid</h2>
      </div>`;
    this.conteiner.appendChild(div);
    this.input.classList.add("card-valid");

    setInterval(() => {
      this.conteiner.removeChild(div);
      this.input.value = "";
      this.input.classList.remove("card-valid");
      document.querySelectorAll(".card").forEach((evt) => {
        evt.classList.remove("active");
      });
    }, 3000);
  }

  cardNumberFalse() {
    document.querySelectorAll(".card").forEach((evt) => {
      evt.classList.remove("active");
    });
    this.input.classList.add("card-invalid");
    const div = document.createElement("div");
    div.classList.add("valid");
    div.innerHTML = `
      <div class="valid-false">
        <h2>Card is not valid</h2>
      </div>`;
    this.conteiner.appendChild(div);
    this.input.classList.add("card-invalid");

    setInterval(() => {
      this.conteiner.removeChild(div);
      this.input.value = "";
      this.input.classList.remove("card-invalid");
      document.querySelectorAll(".card").forEach((evt) => {
        evt.classList.remove("active");
      });
    }, 3000);
  }
}
