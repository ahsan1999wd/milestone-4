/********** !!!-----variable-----!!! **********/


/*************************

number type variable !!!
var sunglassPrice = 120;

string type variable !!!
var specialOneName = "Ari ana Grande";

boolean type variable !!!
var isSingle = true;

two types of number: Integer: 120, !!!
two types of number: parseFloat, decimal: 3.65, !!!

variable naming convention: rules, best practice. !!!

1. single word.
2. no gap or space.
3. no quote.
4. no keyword.
5. can not start with a number.
6. can not contain dash.
7. should use camelCase.

Math Operations: +, -, *, /   !!!

Shorthand: +=, -=, ++, --     !!!

convert: parseInt, parseFloat !!!

toFixed

remainder : vag ses: %

*************************/


/********** !!!-----array-----!!! **********/


/*************************


var friendsAge = [11, 21, 45, 17, 14, 105, 6];

var picnicFee = [5000, 2000, 4000, 150];

var heroin = [ 'ma hi', "opu", 'sab nor', 'saba na'];

var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(friendsAge.length);   !!!

*************************/


/********** !!!-----index-----!!! **********/


/*************************
 * 
index position start : 0, 1, 2, 3, 4, 5  !!!

var numbers = [45, 68, 78, 56, 89, 98];
consol.log(numbers)

1. (get) element value by index !!!

var element = numbers[1]; 
console.log(element);

2. (set) element value by index !!!

numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

3. (find) (index of) an element   !!!

var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

*************************/


/********** !!!-----push-pop-----!!! **********/


/*************************

use (push) to(add element)to an array as the last element array !!!

var numbers = [78, 45, 98, 45];
numbers.push(63);
console.log(numbers);

var friends = ['bal am', 'kal am','sal am'];
friends.push('pail am')
console.log(friends);

use (pop) to(get element) to an array as the last element array !!!

numbers.pop();
consol.log(numbers)

var element = numbers.pop();
console.log(element);

*************************/


/********** !!!-----comparison-----!!! **********/


/*************************

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 != 6);

less than or equal      !!!
console.log( 5 <= 6 )
console.log( 6 <= 6 )
console.log( 16 <= 6 )

greater than or equal   !!!
console.log(5 >= 6)
console.log(5 >= 2)
console.log(2 >= 2)

var num1 = 56;
var num2 = 89;

console.log( num1 < num2);
console.log( num1 > num2);
console.log( num1 === num2);
console.log( num1 !== num2);
console.log( num1 >= num2);
console.log( num1 <= num2);

multiple conditions   !!!

money1 > money2 && result1 > result2 && height1 > height2   !!!

money1 > money2 || result1 > result2 || height1 > height2   !!!

*************************/


/********** !!!-----conditional-----!!! **********/


/*************************
 
var iphonePrice = 79000;
var myBudget = 95000;

*if iphone price is less than my budget i will buy the iphone.

if (condition) {
  will execute if the condition is true
}

if (iphonePrice < myBudget){
  console.log('i phone kine fut ani mar bo');
}

--------------------------------------------------------------

var chickenPrice = 500;
var myMoney = 50;



if (chickenPrice <= myMoney){
  console.log('Murgir raan khamu and haddi chibamu');
}

if (chickenPrice > myMoney){
  console.log('Smashed potato and lentils soup');
}

* if chicken er price is less than my budget i will eat chicken.
* na hoi: else

if(chickenPrice < myMoney) {
  console.log('I will eat Chicken');
}

else{
  console.log('I will eat potato');
}

*************************/


/********** !!!-----multiple-conditions-----!!! **********/


/*************************

&&   <----------  and   !!!

var isGraduated = true;
var salary = 75000;
var cars = 1;

if(isGraduated == true){
  console.log('Eso bi ye ko re fe li')
}
else{
  console.log('tor Kop ale Bi ya nai')
}

if(isGraduated == true && salary > 50000){
  console.log('Eso bi ye ko re fe li')
}
else{
  console.log('tor Kop ale Bi ya nai')
}

if(isGraduated == true && salary > 50000 && cars >= 1){
  console.log('Eso bi ye ko re fe li')
}
else{
  console.log('tor Kop ale Bi ya nai')
}

-------------------------------------------------------------

||   <----------  or   !!!

var isGraduated = false;
var salary = 61000;
var cars = 0;

if(isGraduated === true || salary > 50000 || cars >= 1){
  console.log('Eso Prem ko ri');
}
else{
  console.log('tom ar friend er mobile number dao')
}


if ( isGraduated === true && (salary > 50000 || cars >=1)){

}

*************************/


/********** !!!-----multi-stage-conditions-----!!! **********/


/*************************
 
if-----else if-----else   !!!

var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money) {
  console.log('Dan Dan danish kha mu');
}
else if (butterBread < money) {
  console.log('Butter bon kha mu')
}
else if(toastBiscuit < money){
  console.log('chu bai chu bai toast biscuit kha mu')
}
else {
  console.log('Kha li cha e sas th er jon no va lo')
}

*************************/


/********** !!!-----nested-conditions-----!!! **********/


/*************************

var math = true;
var geometry = true;
var straightLint = false;

if(math == true){
    if(geometry == true){
        if(straightLint == true){

        }
        else{
            console.log('ba ka pot he cho lba na')
        }
    }
    else{
        console.log('pi tha gor ous hoi te par ba na')
    }
}
else{

}

*************************/