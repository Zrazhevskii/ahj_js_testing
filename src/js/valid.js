export default class Luna {
    constructor (cardNumber) {
        this.cardNumber = cardNumber;
    }

    luna(cardNumber) {
        const per =
            typeof cardNumber == 'number'
                ? this.luna1(cardNumber)
                : console.log('Необходимо вводить число');
        return per;
    }

    luna1(per) {
        const d = String(per)
        .split('')
        .map((x) => {
            return Number(x);
        });
        if (d.length >= 8 && d.length <= 19) {
            return this.luna3(d)
        } else {
            return console.log('карточка не валидна однако хозяина');
        }

    }

    luna3(c) {
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
    
        return arr.reduce((x, y) => x + y) % 10 === 0
    }
}

const sup = new Luna();
console.log(sup.luna(2202203254837109))
