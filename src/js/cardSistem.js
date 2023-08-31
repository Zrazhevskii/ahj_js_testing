export default function paySystem(number) {
  document.querySelectorAll(".card").forEach((evt) => {
    evt.classList.remove("active");
  });
  const firstNum = number.slice(0, 1);
  switch (+firstNum) {
    case 2:
      document.querySelector(".mir").classList.add("active");
      break;
    case 4:
      document.querySelector(".visa").classList.add("active");
      break;
  }
  const twoNum = number.slice(0, 2);
  switch (+twoNum) {
    case 31:
    case 35:
      document.querySelector(".jcb").classList.add("active");
      break;
    case 34:
    case 37:
      document.querySelector(".amex").classList.add("active");
      break;
    case 50:
    case 56:
    case 57:
    case 58:
    case 67:
    case 63:
      document.querySelector(".maestro").classList.add("active");
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      document.querySelector(".mastercard").classList.add("active");
      break;
    case 62:
      document.querySelector(".unionPay").classList.add("active");
      break;
    default:
      break;
  }
}
