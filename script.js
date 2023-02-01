objectMath = {
    x: this.number1,
    y: this.number2,
    sign: this.operator
};

class SuperMath {
    number1 = parseFloat(+prompt('Enter the X: '));
    number2 = parseFloat(+prompt('Enter the Y: '));
    operator = prompt(
        'Enter operator to perform the calculation ( either +, -, *, / or % ): '
    );

    checkObj(objectMath) {
        let result;
        switch (this.operator) {
            case '+':
                result = this.number1 + this.number2;
                break;
            case '-':
                result = this.number1 - this.number2;
                break;
            case '*':
                result = this.number1 * this.number2;
                break;
            case '/':
                result = this.number1 / this.number2;
                break;
            case '%':
                result = this.number1 % this.number2;
                break;
            default:
                result = 'Error! No operation selected.';
        }
        return res;
    };

    input() {
        let message = confirm("Everything is OK?");
        if (message == true) {
            alert(this.checkObj(this.object));
        } else {
            this.number1 = parseFloat(+prompt('Enter the X: '));
            this.number2 = parseFloat(+prompt('Enter the Y: '));
            this.operator = prompt(
                'Enter operator to perform the calculation ( either +, -, *, / or % ): '
            );
            alert(this.checkObj({x: this.number1, y: this.number2, sign: this.operator}))
        }
    }
}
const resultSuperMath = new SuperMath({});
resultSuperMath.input()