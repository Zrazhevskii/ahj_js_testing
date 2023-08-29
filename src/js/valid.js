import Vidget from "./vidget";

export default class Luna {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  luna(NumberOfValid) {
    const arrNumbers = NumberOfValid.split("").map((x) => {
      return +x;
    });
    if (arrNumbers.length >= 8 && arrNumbers.length <= 19) {
      return this.luna2(arrNumbers);
    } else {
      return console.log("карточка не валидна однако хозяина");
    }
  }

  luna2(item) {
    const arr = [];
    let n = 1;
    item.reverse().forEach((item) => {
      if (n % 2 == 0) {
        item = item * 2;
        if (item > 9) {
          item = item - 9;
        }
      } else {
        item = item;
      }
      arr.push(item);
      n++;
    });

    const vid = new Vidget()
    return vid.vidget(arr.reduce((x, y) => x + y) % 10 === 0)
  }
}
