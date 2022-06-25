const operator = prompt('kindly enter an operator(+,-,*,/,%)');
const n1 = +prompt('kindly enter a number');
const n2 = +prompt('kindly enter a second number');

let result;

if (operator == '+') {
    result = n1 + n2;
} else if (operator == '-'){
    result = n1 - n2;
} else if (operator == '*'){
    result = n1 * n2;
}
else if (operator == '/'){
    result = n1 / n2;
} else if (operator == '%'){
    result = n1 % n2
} else {
    alert('Invalid operator \n Kindly enter a valid operator(+,-,*,/,%)');
}
alert(`${n1} ${operator} ${n2} = ${result}`);