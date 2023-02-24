// ___________Progress steps___________

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//* объявим переменную, которою привяжем к первому элементу цепи
let currentActive = 1

next.addEventListener('click', () => {

     currentActive++

    //* Создаем условия границы перехода вперед. До длинны коллекции circles
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

})
    //* Создаем условия границы перехода назад.
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    
    update()

})
    //* Даная функция присваивает класс active для активного элемента. Для того, чтобы определить активный элемент, мы используем проверку индекса текущего элемента относительно значения активного элемента.

function update() {
    circles.forEach((el, index) => {
        if (index < currentActive) {
            el.classList.add('active')
        } 
        else {
            el.classList.remove('active')
        }
    })

    //* Создаем логику визуального заполнения прогресса
    const actives = document.querySelectorAll ('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'
    
    //* Создаем условия отображения активных и неактивных кнопок
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


// ___________Adaptive menu___________

window.onload = function() {

    document.querySelector('#menu').onmouseover = menuShow
    document.querySelector('#menu').onmouseout = menuHide
    
    }
        function menuShow() {
            document.querySelector('#menu').style.left = 0
        }
        function menuHide() {
            document.querySelector('#menu').style.left = '-220px'
    }