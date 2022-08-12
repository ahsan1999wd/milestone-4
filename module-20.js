/********** !!!----inch to feet / miles to kilo----!!! **********/


/*************************

function inchToFeet(inches){
  const feet = inches / 12;
  return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('dada feet: ', dadaFeet);

---------------------------------------------

function milesToKilometer(miles){
  const kilometer = miles * 1.609;
  return kilometer;
}

*************************/


/********** !!!-----isEven-----!!! **********/


/*************************

function isEven(number){
  const remainder = number % 2;
  if(remainder === 0){
    return true;
  }
  else{
    return false;
  }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEVen = isEven(1280);
console.log(herNumberIsEVen);

*************************/


/********** !!!-----isLeapYear-----!!! **********/


/*************************

1st way   <----------!!!

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);

-------------------------------------------------

2nd way   <----------!!!

function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);

*************************/


/********** !!!-----findOddSum-----!!! **********/


/*************************

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

----------------------------------------------------

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum);

*************************/


/********** !!!-----sumOfNumbers-----!!! **********/


/*************************
1st way   <----------!!!

1 + 2 + 3 + 4 + 5 + 6 + 7

let sum = 0;
for(let i = 1; i <= 7; i++){
  sum = sum +i;
  consol.log(i, sum);
}

-------------------------------------------

2nd way   <----------!!!

1 + 2 + 3 + 4 + 5 + 6 + 7

function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

*************************/


/********** !!!-----factorial-----!!! **********/


/*************************

1 * 2 * 3 *4 *5 *6 * 7

multiplicationOfNumbers   <----------!!!

function multiplicationOfNumbers(number){
  let result = 1;
  for(let i = 1; i <= number; i++){
    result = result * i;
  }
  return result;
}

const result = multiplicationOfNumbers(9);
consol.log(result);

--------------------------------------------------

// 3! = 3*2*1
// 4! = 4*3*2*1

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);

*************************/


/********** !!!-----factorial-reverse-----!!! **********/


/*************************

while loop factorial   <----------!!!

function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}

-----------------------------------------------------

for loop factorial reverse  <----------!!!

function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial of:', number, fact);

------------------------------------------------------

while loop factorial reverse   <----------!!!

function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const output = factorial(5);
consol.log(output)

*************************/