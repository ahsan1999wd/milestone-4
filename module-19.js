/********** !!!-----slice-includes-substring-----!!! **********/


/*************************

slice   <----------!!!

var number = [1, 8, 98, 45, 65, 71, 63];

number.slice(1, 5)

includes   <----------!!!

var name ='ari ana grande is singing';

name.includes('is')

substring   <----------!!!

var name ='ari ana grande is singing';

name.substring(4, 16)

*************************/


/********** !!!-----function-----!!! **********/


/*************************

function declaration <----------!!!
/*
function functionName (parameters, parameters){
function body
return 
}

functionName(parameters value)

var returnedValue = functionName(parameters value) 
*
---------------------------------------------

function startFan(){
  console.log('Stand up');
  console.log('walk towards the switch');
  console.log('Press the switch');
}

call the function <-----!!!

startFan();   <-----!!!

---------------------------------------------

startFan();
console.log('Waking up in the morning')
startFan();
console.log('Watching JS tutorial')
startFan();
console.log('Eating lunch');

*************************/


/********** !!!-----parameter-----!!! **********/


/*************************

function bringSingara(money){
    console.log('taka disen:');
    console.log('ai nen singara');
}
bringSingara(300);


function add(num1, num2){
    console.log('going to add:', num1, num2);
}
add(125, 96);


function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(15, 98, 56, 5, 9);

*************************/


/********** !!!-----return-----!!! **********/


/*************************

1st way   <----------!!!


function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

add(45, 15);

var total = add(80, 20);
console.log('total', total);

-----------------------------------------------

2nd way   <----------!!!

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150
var singaras = bringSingara(myTaka);
console.log('Eating singaras: ', singaras);

*************************/


/********** !!!-----function-examples-----!!! **********/


/*************************

function functionName (parameters){
    function body
    return 
}
var returnedValue = functionName(parameters value) 

------------------------------------------------------------

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);

*************************/


/********** !!!-----add-----!!! **********/


/*************************

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
console.log()
const result2 = add(35, 7);
const finalResult = add(result1, result2);

*************************/


/********** !!!-----object-----!!! **********/


/*************************

var student = { id: 115, name: 'sola min khan', class: 9, marks: 98}

var student = { 
    id: 115, 
    name: 'Sola min Khan', 
    class: 9, 
    marks: 98
}

var mobile = {
    brand: 'Samsung',
    price: 19000, 
    storage: '64gb',
    camera: '7MP'
}

var myComputer = {
    brand: 'lon ovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

object declaration   <----------!!!

console.log(myComputer.processor);    (value get)<-----!!!

myComputer.processor = 'i79';         (value set)<-----!!!

console.log(myComputer)

*************************/


/********** !!!-----properties-----!!! **********/


/*************************
 
var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
-------------------------------------------------------------------
when you know the specific property name, use dot notation to get the property value   <-----!!!

var penCount = shoppingCart.pen;

-------------------------------------------------------------------

When you know the specific property name, use [''] to get the property value   <-----!!!

var penCount2 = shoppingCart['pen'];

-------------------------------------------------------------------

When you know the specific property name, use (variable) to get the property value   <-----!!!

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName]

console.log(propertyName, propertyValue);

-------------------------------------------------------------------

var properties = Object.keys(shoppingCart);

var propertyValues = Object.values(shoppingCart);

console.log(properties);

console.log(propertyValues);

console.log(shoppingCart);

set property values  <---------------!!!

shoppingCart.mouse = 15;             1st way <-----!!!
console.log(shoppingCart);

shoppingCart['mouse'] = 29;          2nd way <-----!!!
console.log(shoppingCart);

shoppingCart[propertyName] = 89;     3rd way <-----!!!
console.log(shoppingCart)

*************************/


/********** !!!-----object-looping-----!!! **********/


/*************************

array vs object   <----------!!!

var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];

var friendsAge = [12, 45, 78, 12, 32, 14];

var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}
------------------------------------------------------------------
var shoppingCart = {
    books: 3, 
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}

*************************/


/********** !!!-----switch-----!!! **********/


/*************************

if-----else if-----else <---------------!!!

const color = 'yellow';

if(color === 'green'){
    console.log('You are a green friend');
}
else if (color === 'blue'){
    console.log('You are a blue friend');
}
else if (color === 'red'){
    console.log('You are a red friend');
}
else if (color === 'white'){
    console.log('You are a white friend');
}
else if(color === 'yellow'){
    console.log('You are a yellow hi mu friend');
}
else {
    console.log('You are a black black friend');
}

-------------------------------------------------------------------

switch  <---------------!!!

const color = 'yellow';

switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a BLUE friend');
        break;
    case 'white':
        console.log('You are a white friend');
        break;
    case 'red':
        console.log('You are a red friend');
        break;
    case 'yellow':
        console.log('You are a yellow hi mu friend');
        break;
    default:
        console.log('You are a ka la ka la friend');
}

*************************/