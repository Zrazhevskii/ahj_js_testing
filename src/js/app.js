import Vidget from './vidget';
import Luna from './valid';

const value = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(value.value);
  const numberCard = new Luna();
  numberCard.luna(e)
})

