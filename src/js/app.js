import Luna from "./valid";
import paySystem from './cardSistem';

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

input.addEventListener('keyup', function(evt) {
  paySystem(input.value);
})

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const numberCard = new Luna();
  numberCard.luna(input.value);
});

// 8273123273520569
// 4539148803436467
