/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1,number2) {

    //function body
    return number1 + number2;
}
   
function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(number1,number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function Subtract (num1,num2){
    return num1 - num2;
}

function subtractNumbers(){
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = Subtract(num1,num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiplyNumbers = ()=> document.querySelector('#product').value=
                        Number(document.querySelector('#factor1').value)*Number(document.querySelector('#factor2').value);

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */

const divideNumbers = ()=> document.querySelector('#quotient').value=
                        Number(document.querySelector('#dividend').value)/Number(document.querySelector('#divisor').value);

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.getElementById('array').innerHTML=array_numbers;

/* Output Odds Only Array */
const odds = array_numbers.filter((num) => num % 2 === 1);
document.getElementById('odds').innerHTML=odds;

/* Output Evens Only Array */
const evens = array_numbers.filter((num) => num % 2 === 0);
document.getElementById('evens').innerHTML=evens;

/* Output Sum of Org. Array */
let result = array_numbers.reduce((a, b) => {
    return a + b;
  });
  document.getElementById('sumOfArray').innerHTML=result;

/* Output Multiplied by 2 Array */
function double(value) {
    return (Array.isArray(value)) ? value.map((v) => v * 2) : (value * 2);
  } 
document.getElementById('multiplied').innerHTML = double(array_numbers);

/* Output Sum of Multiplied by 2 Array */
let double_result =double(array_numbers).reduce((a, b) => {
    return a + b;
  });
  document.getElementById('sumOfMultiplied').innerHTML=double_result;
/*current date*/
document.querySelector('#year').textContent = new Date().getFullYear();