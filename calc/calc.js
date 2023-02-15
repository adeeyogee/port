
let a = '' //first number
let b = '' //second number
let sign = '' //знак операции
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

const out = document.querySelector('.calc-screen p')
function clearAll () {
    a = '' //first number and result
    b = '' //second number
    sign = '' //знак
    finish = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll
document.querySelector('.del').onclick = (event) => {
    
}

document.querySelector('.buttons').onclick = (event) => {
    // no button pressed
    if(!event.target.classList.contains('btn')) return;

    // pressed AC button
    if(event.target.classList.contains('ac')) return;
    out.textContent = ''

    // receive pressed button
    const key = event.target.textContent

    // button click test 0-9 or .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
        a += key
        out.textContent = a
    }
    else if (!a == '' && !b == '' && finish) {
        b = key
        finish = false
        out.textContent = b
    }
    else {
        b += key
        out.textContent = b
    }
    console.log(a, b, sign)
    return
}

    // if pressed +, -, X, /
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        console.log(a, b, sign)
        return
    }

    // if pressed =
    if (key === '=') {
        if (b === '') b = a
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

    // if pressed percent
    if (key === '%') {
    b = (a * b)/100
    out.textContent = b
    return
}
    // if pressed delete
    if (key === 'del') {
        if (a !== '' & b === '') {
    a = a.substring(0, a.length - 1)
    out.textContent = a
    console.log(a)
        }

        else if (a !== '' && b !== '') {
        b = b.substring(0, b.length - 1)
        out.textContent = b
        console.log(a, b, sign)
        
    }

        
        if (out.textContent == 0) {
            out.textContent = 0
        }

        
    }
}