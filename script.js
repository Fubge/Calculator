// screen und buttons aus dom holen 
// num buttons alle zusammen holen 

const screen = document.querySelector('#screen');
const numberBtns = document.querySelectorAll('.number');
const additionBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const resultBtn = document.querySelector('.result');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');

// Variables operator der gewählt wurde und  eingaben 
let operator = undefined;
let prevInput;
let newInput;
let result;

// function zum bildschirm clearen 
const clearScreen = () => {
    screen.value = '';
};

// Display on page load leer machen 
clearScreen();

// display die zahl die ich drücke auf dem screen 
numberBtns.forEach(btn => {
    btn.addEventListener('click', e => { 
        screen.value += e.currentTarget.innerText;
    })  
});

// nachdem ein operator gedrückt wurde zahl vom bildschirm entfernen
// die erste zahl und der operator sollen i wo gespeichert werden 

// addition button 
additionBtn.addEventListener('click', () => {
    operator = '+';
    prevInput = parseFloat(screen.value);
    clearScreen();
});

// subtractBtn
subtractBtn.addEventListener('click', () => {
    operator = '-';
    prevInput = parseFloat(screen.value);
    clearScreen();
});

// multiplyBtn
multiplyBtn.addEventListener('click', () => {
    operator = '*';
    prevInput = parseFloat(screen.value);
    clearScreen();
});

// divideBtn
divideBtn.addEventListener('click', () => {
    operator = '/';
    prevInput = parseFloat(screen.value);
    clearScreen();
});

// resultBtn
resultBtn.addEventListener('click', () => {
    compute();
})

// zweite zahl im bildschirm eingeben 
// = soll das ergebnis von zahl 1 & operator zahl 2 auf dem screen anzeigen 

const compute = () => {
    newInput = parseFloat(screen.value);
     clearScreen();
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
            screen.value = 'kein operator';           
     }
}

// ac soll den screen clearen
clearBtn.addEventListener('click', () => {
    clearScreen();
});

// c soll die letzte eingegebene zahl löschen  
