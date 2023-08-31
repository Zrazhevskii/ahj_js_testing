export default class Vidget {
  constructor(validCard) {
    this.validCard = validCard;
    this.input = document.querySelector('.input')
    this.conteiner = document.querySelector('.box-conteiner')
  }



  vidget(bool) {
    return bool ? this.cardNumberTrue() : this.cardNumberFalse()
  }

  cardNumberTrue() {
    const div = document.createElement('div');
    div.classList.add('valid')
    div.innerHTML = `
      <div class="valid-true">
        <h2>Card is valid</h2>
      </div>`
    this.conteiner.appendChild(div)
    setInterval(() => {
      this.conteiner.removeChild(div);
      this.input.value = ''
    }, 3000)
  }

  cardNumberFalse() {
    document.querySelectorAll(".card").forEach((evt) => {
      evt.classList.remove("active");
    });
    const div = document.createElement('div');
    div.classList.add('valid')
    div.innerHTML = `
      <div class="valid-false">
        <h2>Card is not valid</h2>
      </div>`

    this.conteiner.appendChild(div)
    setInterval(() => {
      this.conteiner.removeChild(div);
      this.input.value = ''
    }, 3000)
  }
}
