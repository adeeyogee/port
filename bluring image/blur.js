const loader = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
   //* Получаем элементы в переменные

let load = 0
let int = setInterval(blurring, 30)
/*
   //* Создаем переменную int и присваиваем ей интервал с шагом 30мс
   //* Данный интервал будет вызывать функцию blurring
*/
function blurring() {
   load++
   if (load > 99) {
      clearInterval(int)
   }
   loader.innerText = `${load}%`
   loader.style.opacity = scale(load, 0, 100 , 1, 0)
   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
/*
   //* К переменной load привязан стиль loading-text (цифры процентов загрузки)
   //* Функция будет увеличивать значение load с 0 до 99. Когда достигнет 99, она очистит интервал
   //* Также, функция с каждым шагом будет менять прозрачность цифр загрузки и значение размытия заднего фона (16-17L)
*/



//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
/*
//* Используем данную функцию для преобразования диапазона, а именно
//* Наш loader работает в диапазоне от 0 до 100%, а стиль opacity - от 0 до 1
//* По итогу мы получаем функцию, которая имеет зависимость одного диапазона от другого
//* 0 - 99 => 1 - 0. При значении loader 99, прозрачность будет максимальной и цифры с % пропадут.
*/

function scale (number, inMin, inMax, outMin, outMax) {
   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}