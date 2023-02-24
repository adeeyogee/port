//*Получаем блоки в переменные
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//* При наведении мыши, добавляются и удаляются соответствующие классы
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))