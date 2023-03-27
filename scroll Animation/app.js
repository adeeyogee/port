//____________Content Boxes____________

const boxes = document.querySelectorAll('.box')

//* По событию прокручивания будет выполняться функция checkBoxes
window.addEventListener('scroll', checkBoxes)



function checkBoxes() {

  //* По формуле  приходим к необходимому для нас значению всплытия нового чекбокса. Мы не можем использовать фиксированное значение, т.к. размер window.innerHeight может меняться. Таким образом, в переменной triggerBottom будет лежать динамическое значение, благодаря которому мы можем создать условие появления нового чекбокса.
  
  const triggerBottom =  window.innerHeight / 6 * 4


  boxes.forEach(box => {
    //* С помощью getBoundingClientRect() получаем верхнюю координату каждого элемента
   const boxTop = box.getBoundingClientRect().top

   //* Создаем незамысловатое условие появления чекбокса. Сравниваем триггер точку и положение верхней точки элемента.
   if (boxTop < triggerBottom) {
         box.classList.add('show')
   } else {
      box.classList.remove('show')
   }
 })
}

//____________Progress Bar__________

let fullHeight, innerHeight 
const progressBar = document.querySelector('.progressbar>.progressbar-line')


window.addEventListener('scroll', fillProgressLine)
window.addEventListener('resize', fillProgressLine)

function fillProgressLine() {

    //* Получаем в переменные общую высоту контента и видимую
    fullHeight = document.body.scrollHeight
    innerHeight = window.innerHeight

    //* Добавляем значение ширины .progressBar, которое получаем по формуле 
    progressBar.style.width = (scrollY * 100 / (fullHeight - innerHeight) + '%')
}

fillProgressLine()


