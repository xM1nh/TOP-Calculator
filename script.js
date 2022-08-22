const buttons = document.querySelectorAll('.buttons');
const disButtons = document.querySelectorAll('.display');
const clrButton = document.getElementById('clear');
const dltButton = document.getElementById('delete');
const opButton = document.querySelectorAll('.operation');
const result = document.getElementById('result');
const current = document.getElementById('current');
const eqButton = document.getElementById('equal');
let inputArr = [];
let process = {
    val1: '',
    val2: '',
    result: 0,
    operation: '',
};


buttons.forEach((button) => {
    const backgroundColor = button.getAttribute('backgroundColor');
    button.onmouseenter = () => button.style.backgroundColor = '#E9E9E9';
    button.onmouseleave = () => button.style.backgroundColor = backgroundColor;
});

disButtons.forEach((button) => {
    button.onclick = () => {
        inputArr.push(button.textContent);
        result.textContent = inputArr.join('');
        if (process.val1 == '') {
            process.val1 = Number(inputArr.join(''));
        } else {
            process.val2 = Number(inputArr.join(''));
        }
    }
})

opButton.forEach((button, index) => {
    button.onclick = () => {
        if (process.val2 == '') {
            if (process.result !==0) {
                current.textContent = process.result + ` ${opButton[index].textContent} `;
            } else {
                current.textContent = process.val1 + ` ${opButton[index].textContent} `;
            }
        } else {
            process.result = operate(process.operation, process.val1, process.val2);
            current.textContent = process.result + ` ${opButton[index].textContent} `;
            process.val1 = process.result;
        }
        process.operation = opButton[index].textContent;
        inputArr = [];
        process.val2 = '';
    }
})

eqButton.onclick = () => {
    if (process.val2 == '') {
        result.textContent = process.val1;
    } else {
        current.textContent += ` ${process.val2}`;
        result.textContent = operate(process.operation, process.val1, process.val2);
    }
};

clrButton.onclick = () => {
    result.textContent = "0";
    current.textContent = '';
    inputArr = [];
    process ={
        val1: '',
        val2: '',
        result: 0,
        operation: '',
    };
};

dltButton.onclick = () => {
    inputArr.pop();
    if (inputArr.length == 0) {
        result.textContent = '0';
    } else {
        result.textContent = inputArr.join('');
    }
};

//Operation functions
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function operate(operation, val1, val2) {
    if (operation == '+') {return add(val1, val2)};
    if (operation == '-') {return substract(val1, val2)};
    if (operation == 'x') {return multiply(val1, val2)};
    if (operation == '/') {
        if (val2 == 0) {
            result.textContent = 'CAN\'T DO THAT';
        } else {
            return division(val1, val2);
        }
    };
}