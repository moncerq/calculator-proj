let displayInput = document.getElementById('display');
let operatorButtons = document.querySelectorAll('.operator');
let numberButtons = document.querySelectorAll('.number');
let clearButton = document.querySelector('.clear');
let calculateButton = document.querySelector('.calculate');

function count(num1, num2, mark) {
    switch (mark) {
        case "*":
            return num1 * num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "не делится на нуль";
            }
    }
}

numberButtons.forEach(elem => {
    elem.addEventListener('click', (event) => {
        displayInput.value += event.target.value;
    });
});

operatorButtons.forEach(elem => {
    elem.addEventListener('click', (event) => {
        displayInput.value += event.target.value;
    });
});

clearButton.addEventListener('click', () => {
        displayInput.value = '';
});

calculateButton.addEventListener('click', () => {
    let input = displayInput.value;
    let result = eval(input);
    displayInput.value = result;
});