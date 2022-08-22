const buttons = document.querySelectorAll('.buttons');
const disButtons = document.querySelectorAll('.display');
const clrButton = document.getElementById('clear');
const dltButton = document.getElementById('delete');
const plusButton = document.getElementById('plus');
const subsButton = document.getElementById('minus');
const divButton = document.getElementById('divi');
const mulButton = document.getElementById('mul');
const current = document.getElementById('current');
let memoryArr = [];


buttons.forEach((button) => {
    const backgroundColor = button.getAttribute('backgroundColor');
    button.onmouseenter = () => button.style.backgroundColor = '#E9E9E9';
    button.onmouseleave = () => button.style.backgroundColor = backgroundColor;
});

disButtons.forEach((button) => {
    button.onclick = () => {
        memoryArr.push(`${Number(button.textContent)}`);
        current.textContent = memoryArr.join('');
    }
})


//Clear and Delete buttons
clrButton.onclick = () => {
    current.textContent = "0";
    memoryArr = []
};

dltButton.onclick = () => {
    memoryArr.pop();
    if (memoryArr.length == 0) {
        current.textContent = '0';
    } else {
        current.textContent = memoryArr.join('');
    }
};


//Operation functions
function add(a,b) {
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