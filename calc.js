// Calculating functionality
document.addEventListener("DOMContentLoaded", function() {
    let display = document.querySelector('.display');
    let buttons = Array.from(document.querySelectorAll('td'));
    let currentInput = '';
    let memory = 0;

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerText;
            if (value === 'C') {
                currentInput = '';
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                    display.innerText = currentInput;
                } catch {
                    display.innerText = 'Error';
                }
            } else if (value === 'CE') {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || '0';
            } else if (value === 'M+') {
                memory += parseFloat(currentInput);
            } else if (value === 'M-') {
                memory -= parseFloat(currentInput);
            } else if (value === 'MC') {
                memory = 0;
            } else if (value === 'MR') {
                display.innerText = memory;
                currentInput = memory.toString();
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });
});
