//Toggle button
const toggle = document.querySelector("#toggle"),
    body = document.querySelector('body');



const switchButton = () => {


    toggle.addEventListener('change', () => {

        switch (toggle.value) {
            case '1':
                body.classList.remove('theme2');
                body.classList.remove('theme3');
                body.classList.add('theme1');
                break;

            case '2':

                body.classList.remove('theme1');
                body.classList.remove('theme3');
                body.classList.add('theme2');

                break;

            case '3':
                body.classList.remove('theme1');
                body.classList.remove('theme2');
                body.classList.add('theme3');
                break;

        }
    });




}



//Main


let buttons = document.querySelectorAll('.calc__btn'),
    screen = document.querySelector('#screen'),
    operationState = false,
    currentNumber = '',
    number = [],
    operation = [];


const delPress = () => {
    let display = screen.value;
    let del = display.length;
    display = display.slice(0, del - 1);
    if (display === '') display = '';
    screen.value = display;
    currentNumber = display;
}



const dotPress = () => {
    currentNumber = currentNumber + '.';
    updateScreen(currentNumber);
}

const numberPress = (num) => {

    if (currentNumber === '') currentNumber = num;
    else currentNumber += num;
    updateScreen(currentNumber);
    operationState = true;
}



const operatorPress = (op) => {

    if (!operationState) {
        return;
    }

    operation.push(op);
    number.push(currentNumber);


    if (op === '=') {
        currentNumber = calc();
        updateScreen(currentNumber);
        resetNumOp(currentNumber);
    } else {
        currentNumber = '';
        updateScreen();
        operationState = false;
    }

}

const calc = () => {

    let total = 0;

    for (let i = 0; i < number.length; i++) {

        if (i === 0) {
            total = Number.parseFloat(number[i]);
        } else {
            total = calcOperation(total, Number.parseFloat(number[i]), operation[i - 1]);
        }
    }

    return `${total}`;
}



const calcOperation = (n1, n2, op) => {
    switch (op) {
        case '+':

            return n1 + n2;
        case '-':
            return n1 - n2;

        case 'x':
            return n1 * n2;
        case '/':
            return n1 / n2;

        default:
            return 0;

    }
}



const resetNumOp = (num = '') => {
    number = [];
    operation = [];
    currentNumber = num;
}



const updateScreen = (num = '0') => {


    const windowScreen = window.innerWidth,
        numLength = num.length;


    //Mobile
    if (windowScreen <= 500) {

        if (numLength >= 10 && numLength < 15) screen.style.fontSize = '32px';
        else if (numLength >= 15) screen.style.fontSize = '24px';
        else screen.style.fontSize = '48px';

        //Normal
    } else {

        if (numLength >= 18 && numLength < 25) screen.style.fontSize = '32px';
        else if (numLength >= 25) screen.style.fontSize = '24px';
        else screen.style.fontSize = '48px';
    }

    screen.value = num;
}



const handleButtonPressed = (btnContent) => {


    if (btnContent === '.') {
        dotPress();
    } else if (btnContent === 'DEL') {

        delPress();

    } else if (btnContent === 'RESET') {
        resetNumOp();
        updateScreen();
    } else if (!isNaN(Number.parseInt(btnContent))) {
        numberPress(btnContent);
    } else {
        operatorPress(btnContent);
    }



}

const getInfo = () => {

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => handleButtonPressed(e.target.innerText));
    })

}

getInfo();
switchButton();