// Calculating functionality script

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.calculator-keys button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            display.textContent = '0';
        } else if (value === '=') {
            try {
                const input = display.textContent.replace(/×/g, '*').replace(/÷/g, '/');
                display.textContent = eval(input);
            } catch (error) {
                console.error('Error:', error);
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    });
});
