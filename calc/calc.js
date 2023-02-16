
let a = '' //первое значение
let b = '' //второе значение
let sign = '' //знак операции
let finish = false //

//* создаем 2 массива: с операциями и с клавиатурой
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

//* Объявляем переменную out, в которой будет находиться "дисплей"
const out = document.querySelector('.calc-screen p')

//* Создаем функцию кнопки АС, при нажатии на которую, будут очищаться значения всех переменных и на "дисплее" будет отображаться 0
function clearAll () {
    a = '' //first number and result
    b = '' //second number
    sign = '' //знак
    finish = false
    out.textContent = 0
}
//* Присваиваем функцию очищения кнопке
document.querySelector('.ac').onclick = clearAll
document.querySelector('.del').onclick = (event) => {
    
}

//* Создаем ограничения для области клика (если нажата область за пределами кнопки, то функция завершает работу (31L))
document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;

    // нажата кнопка АС
    if(event.target.classList.contains('ac')) return;
    out.textContent = ''

    //* Получаем нажатую кнопку 
    const key = event.target.textContent

    //* Описываем логику работы калькулятора:
    /*      - при нажатии на цифру заполняется переменная а
            - при нажатии на знак и последующем нажатии на цифру заполняется переменная b
    */

    //* Проверяем, нажата ли цифровая кнопка или точка (проверяем по массиву ↑↑↑)

    if (digit.includes(key)) {
        //* По нажатию проверяем наличие данных в переменных, чтобы программа понимала, в какую именно переменную заносить цифры. В данном случае наполняем переменную а

        if (b === '' && sign === '') {
        a += key
        out.textContent = a
    }
        //* Переменная finish необходима для того, чтобы программа поняла, что операция вычисления закончена. Ниже будет описано, что при знаке = finish будет true. Дальше привязываемся к этому и реализуем логику выполнения после сценария "2 + 5 = 10 + 3" Благодаря finish, мы можем проводить вычисления после =, следующее число будет занесено в b

    else if (a !== '' && b !== '' && finish) {
        b = key
        finish = false
        out.textContent = b
    }
        // Проверка для заполнения переменной b
    else {
        b += key
        out.textContent = b
    }
    console.log(a, b, sign)
    return
}

    // Проверка на нажатие знака из массива actions
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        console.log(a, b, sign)
        return
    }

    // Обработка кнопки =
    if (key === '=') {
        if (b === '') {
             b = a }
        //* ↑ Эта проверка нужна для того, чтобы была возможность считать следующим образом: 2 + = //4. Т.е. не занося значение в переменную b

        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = a - b
                break
            case 'X':
                a = a * b
                break
            case '/':
                if (b === '0') {
                    //*Обнуляем значения всех переменных в случае деления на 0
                    out.textContent = 'error'
                    a = ''
                    b = ''
                    sigh = ''
                    return
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
        console.log(a, b, sign)
    }

    // Обработка знака %
    if (key === '%') {
    b = (a * b)/100
    out.textContent = b
    return
}
    // Обработка backspace
    if (key === 'del') {
        if (a !== '' & b === '') {
    a = a.substring(0, a.length -1)
    out.textContent = a
    console.log(a)
        }

        else if (a !== '' && b !== '') {
        b = b.substring(0, b.length -1)
        out.textContent = b
        console.log(a, b, sign)
        
    }

        
        if (out.textContent == 0) {
            out.textContent = 0
        }

        
    }
}