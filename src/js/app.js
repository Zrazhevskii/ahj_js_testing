import Luna from "./valid";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const numberCard = new Luna();
  console.log(numberCard.luna(input.value));
});

// 8273123273520569
// 4539148803436467
