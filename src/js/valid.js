export default class Luna {
  constructor(cardNumber) {
    this.cardNumber = cardNumber;
  }

  checkCard(NumberOfValid) {
    if (NumberOfValid.trim()) {
      console.log(NumberOfValid);
      const arrNumbers = NumberOfValid.split("").map((x) => {
        return +x;
      });
      if (arrNumbers.length >= 8 && arrNumbers.length <= 19) {
        const arr = [];
        let n = 1;
        arrNumbers.reverse().forEach((item) => {
          if (n % 2 == 0) {
            item = item * 2;
            if (item > 9) {
              item = item - 9;
            }
          } else {
            item;
          }
          arr.push(item);
          n++;
        });

        return arr.reduce((x, y) => x + y) % 10 === 0;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
