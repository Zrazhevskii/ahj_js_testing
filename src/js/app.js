import Luna from "./valid";

const value = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const numberCard = new Luna();
  console.log(numberCard.luna(value.value));
});
