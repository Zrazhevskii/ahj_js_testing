import Luna from "./valid";

export default class Vidget {
  constructor(validCard) {
    this.validCard = validCard;
    this.input = document.querySelector('.input')
  }



  vidget(bool) {
    if (bool) {
      this.input.value = 'Вы победили'
    } else {
      console.log('чет пошло не так');
    }
  }
}
