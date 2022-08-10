/********** !!!-----Math-----!!! **********/


/*************************

 MATH Needed to Start Learning a Programming language

 1. number: 55, +44, -32

 2. integer: 2, 4, odd, even

 3. float: decimal: 2.5, 13.67, 32.69

 4. operation: addition, subs traction, multiplication, division, remainder

 7. comparison: >, <, ==, !=, >=, <=

 8. oi-kik: 2 kilo apple and 5 kilo mango:

 9. 45, 25, 68, 68, 129, 2: max, min, percent, average, sum

 10. series: 

 :::EXTRA::::
 1. Prime
 2. permutation

*************************/


/********** !!!-----very+able = variable-----!!! **********/


/*************************

  1---------2---------3-----4----5
(var) (variableName) (=) (2022) (;)

      
---------- number ----------!!!

var price =100;
var age =50;
var temperature =30;


---------- string ----------!!!


var person ='handsome';
var location ='dhaka';
var brand ='yamaha';


---------- boolean ----------!!!


var poor = true;
var rich = false;
var amd = true;

*************************/



/********** !!!-----variable-name-----!!! **********/


/*************************

good variable !!!

var price =20;


1. variable name can not be any keywords ‌‌!!!

var true = 55;
var return = true;
var false = 400;

2. variable name has to be in one work. No space !!!

var my home address = "New California";

3. variable name can not have quotation !!!

var "name" = "Tom Hanks";

4. variable name can not starts with a number but can ends with a number !!!

var 99Club = 1964;
var club25 = 2025;

5. How to use long names,can not use dash !!!

var user-name = "raj bpa";

var user_home_address = "an dor ki lla ban dor ban"; // snake case !!!

var userHomeAddress = "an dor ki lla ban dor ban"; // camel case:- we will use this one !!!

var UserHomeAddress = "an dor ki lla ban dor ban"; // pascal case !!!

6. variable name is case sensitive !!!
var person = 25;
var Person = 35;

*************************/


/********** !!!-----operation-----!!! **********/


/*************************

var onionPrice = 20;
var eggPrice = 10;

console.log(onionPrice);
console.log(eggPrice);
console.log(onionPrice + eggPrice);

addition !!!

var totalPrice = onionPrice + eggPrice;
console.log(totalPrice);

subtraction !!!

var priceDifference = onionPrice - eggPrice;
console.log(priceDifference);

multiplication !!!

var orangePrice = 20;
var quantity = 7;
var totalCost = orangePrice * quantity;
console.log(totalCost);

division !!!

var money = 500;
var player = 10;
var eachPlayer = money / player;
console.log(eachPlayer);

*************************/


/********** !!!-----shorthand-----!!! **********/


/*************************

variable declaration !!!

var tomatoPrice = 25;

variable value update !!!
set a new value !!!

tomatoPrice = 30;

add something to the previous value !!!
add some value to the existing value !!!

var price1 = 31;
var price2 = 10;
price1 = price1 + 10;
console.log(price1);

!!!----------addition to the same variable shorthand----------!!!

+= means adding some value to the existing value !!!
price1 = price1 + 10;
price1 += 10;
console.log(price1);

-= means deducting some values from the current value of the variable !!!
price2 = price2 - 5;
price2 -= 5;
console.log(price2);

*= !!!
price1 *= 5;
console.log(price1);

/= !!!
price1 /= 5;
console.log(price1);

++ means adding 1 to the existing !!!

var age = 15;
age = age + 1;
age++;

-- means you are deducting 1 from the existing value !!!
var love = 100;
love =love -1;
love--;

*************************/


/********** !!!-----concatenation-----!!! **********/


/*************************

var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);

var firstName = 'Jennie';
var lastName = 'Kim';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

*************************/


/********** !!!-----conversion-----!!! **********/


/*************************

var price1 = '50';
var price2 = '10';
var totalPrice = price1 + price2;
console.log(totalPrice);

var price1 = 50;
var price2 = '10';
var totalPrice = price1 + price2;
console.log(totalPrice);

var price1 = '50';
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);

convert string to number !!!

parseInt !!!
var price1Number = parseInt(price1);
console.log(price1Number);

parseFloat !!!
var gpa = '3.41';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);

*************************/


/********** !!!-----types-----!!! **********/


/*************************

 var price = 100;
console.log(typeof price);

var price = '100';
console.log(typeof price);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(typeof romantic);

toFixed !!!
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;

sum = sum.toFixed(5); !!!

sum = parseFloat(sum);

console.log(sum);

*************************/


/********** !!!-----remainder-----!!! **********/


/*************************

% this means vag ses !!!

var mangoes = 19;
var person = 7;
var remainder = mangoes % person;
consol.log(remainder);

/ this means vag fol !!!

var mangoes = 19;
var person = 7;
var remainder = mangoes / person;
console.log(remainder);

*************************/