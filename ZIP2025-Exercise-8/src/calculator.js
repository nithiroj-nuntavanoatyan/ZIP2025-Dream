const numberbuttons = document.querySelectorAll('[data-number]');
const numberoperations = document.querySelectorAll('[data-operation]');
const equalbutton = document.querySelector('[data-equal]');
const clearbutton = document.querySelector('[data-clear]');
const previousOperationsText = document.querySelector('[previous-data-operation]');
const currentOperationsText = document.querySelector('[current-data-operation]');
const inverserbutton = document.querySelector('[data-inverse]');


class Calculator {
    constructor(previousOperationsText, currentOperationsText) {
        this.previousOperationsText = previousOperationsText
        this.currentOperationsText = currentOperationsText
        this.clear()
    }

    clear() {
        this.currentOperations = ''
        this.previousOperations = ''
        this.operations = null
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperations.includes('.')) return
        this.currentOperations = this.currentOperations.toString() + number.toString()
    }

    chooseOperations(operation) {
        if (this.currentOperations === '') return
        if (this.previousOperations !== '') {
            this.compute()
        }
        this.operations = operation
        this.previousOperations = this.currentOperations
        this.currentOperations = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperations)
        const current = parseFloat(this.currentOperations)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operations) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            case '%':
                computation = prev % current
                break
            default:
                return
        }
        this.currentOperations = computation
        this.operations = null
        this.previousOperations = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperationsText.innerText = this.getDisplayNumber(this.currentOperations)
        if (this.operations != null) {
            this.previousOperationsText.innerText =
                `${this.getDisplayNumber(this.previousOperations)} ${this.operations}`;
        } else {
            this.previousOperationsText.innerText = ''
        }

    }

    inverse() {
        if (this.currentOperations === '') return

        const current =parseFloat(this.currentOperations)
        this.currentOperations = (-current).toString()
    }
}


const calculator = new Calculator(previousOperationsText, currentOperationsText)

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

numberoperations.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperations(button.innerText)
        calculator.updateDisplay()
    })
})

equalbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearbutton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

clearbutton.addEventListener('click', button => {
    calculator.inverse()
    calculator.updateDisplay()
})