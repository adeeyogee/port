const panels = document.querySelectorAll('.panel')

//* Перебираем "панели". На каждой итерации по клику выполняем функцию удаления класса active и добавление этого же класса на новый элемент

panels.forEach((panel) => {
panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}