// Getting elements from DOM 
const screen = document.querySelector('#screen');
const numberBtns = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const resultBtn = document.querySelector('[data-result]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');

// Variables to store data
let operator;
let prevInput;
let newInput;
let result;

// Functions

const clearScreen = () => {
    screen.value = '';
};

// Main function
const compute = () => {
     switch (operator) {
        case '+':
            result = prevInput + newInput;
            screen.value = result;
            break;
        case '-':
            result = prevInput - newInput;
            screen.value = result;
            break;
        case '*':
            result = prevInput * newInput;
            screen.value = result;
            break; 
        case '/':
            result = prevInput / newInput;
            screen.value = result;
            break;
        default:
            screen.value = 'Please enter a Number';           
     }
};

// Clear screen on page load 
window.addEventListener('DOMContentLoaded', () => {
    clearScreen();
});

// Eventlisteners 

// Number buttons  
numberBtns.forEach(btn => {
    btn.addEventListener('click', e => { 
        screen.value += e.currentTarget.innerText;
    })  
});

// Operator buttons
operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = e.currentTarget.innerText;
        prevInput = parseFloat(screen.value);
        clearScreen();
    })
});

// ResultBtn
resultBtn.addEventListener('click', () => {
    newInput = parseFloat(screen.value);
    clearScreen();
    compute();
});

// AC Button 
clearBtn.addEventListener('click', () => {
    clearScreen();
});

// c soll die letzte eingegebene zahl löschen  
