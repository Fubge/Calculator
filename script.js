// Getting elements from DOM 
const screen = document.querySelector('#screen');
const numberBtns = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const resultBtn = document.querySelector('[data-result]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const dotBtn = document.querySelector('[data-dot]')

// Variables to store data
let operator;
let prevInput;
let newInput;
let result;

// Functions

const reset = () => {
    prevInput = '';
    newInput = '';
    result = '';
}

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
           case '÷':
               result = prevInput / newInput;
               screen.value = result;
               break;
           default:
               screen.value = 'Please enter a Number';           
        }
    }

    // Only Press result button once
    const clickedResult = () => {
        newInput = parseFloat(screen.value);
        compute();
        resultBtn.removeEventListener('click', clickedResult);
      };

// Clear screen on page load 
window.addEventListener('DOMContentLoaded', () => {
    clearScreen();
});

// Eventlisteners

// Number buttons  
numberBtns.forEach(btn => {
    btn.addEventListener('click', (e) => { 
        if (screen.value.length < 16)
            screen.value += e.currentTarget.innerText;
     })  
});

// Operator buttons
operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        operator = e.currentTarget.innerText;
        prevInput = parseFloat(screen.value);
        clearScreen();
        resultBtn.addEventListener('click', clickedResult);
        })
    })

// AC button 
clearBtn.addEventListener('click', () => {
    clearScreen();
    reset();
});

// Delete button
deleteBtn.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
});

// Dot button
dotBtn.addEventListener('click', () => {
    if (!screen.value.includes('.')) {
        screen.value += dotBtn.innerText;
    }
});