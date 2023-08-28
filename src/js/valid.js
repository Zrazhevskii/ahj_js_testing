import Vidget from "./vidget";

export default class Luna {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  luna(NumberOfValid) {
    const d = NumberOfValid.split("").map((x) => {
      return +x;
    });
    if (d.length >= 8 && d.length <= 19) {
      return this.luna2(d);
    } else {
      return console.log("карточка не валидна однако хозяина");
    }
  }

  luna2(c) {
    const arr = [];
    let n = 1;
    c.reverse().forEach((item) => {
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

    return arr.reduce((x, y) => x + y) % 10 === 0;
  }
}
