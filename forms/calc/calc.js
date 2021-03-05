 number1 = parseInt(prompt('Enter a number'));
 number2 = parseInt(prompt('Enter another number'));

function Calculate(num1, num2) {
     var sum = num1 + num2
     return sum;
    }

var summedNumbers = Calculate(number1, number2)
console.log (`The sum of ${number1} and ${number2} is ${summedNumbers}`);