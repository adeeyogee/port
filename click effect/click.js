const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
   button.addEventListener('click', function (e)  {

      //* Получаем абслютные координаты кнопки
      const x = e.clientX
      const y = e.clientY

      //* "Вычисляем" координатную плоскость для кнопки
      const buttonTop = e.target.offsetTop
      const buttonLeft = e.target.offsetLeft

      //* Получаем координаты внутри саой кнопки
      const xInside = x - buttonLeft
      const yInside = y - buttonTop

      //* Создаем новый элемент span, к которому применяем стиль circle
      const circle = document.createElement('span')
      circle.classList.add('circle')
      circle.style.top = yInside + 'px'
      circle.style.left = xInside + 'px'


      //* По клику на кнопку вычисляются координаты клика и в этом месте создается элемент span, которому присваивается стиль circle
      this.appendChild(circle)

      //* После отработки элемент удаляется из DOM
      setTimeout(() => circle.remove(), 500)
   })
})