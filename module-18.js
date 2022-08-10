/********** !!!-----while-----!!! **********/


/*************************

roastGiven = roastGiven + 1;
roastGiven += 1;
roastGiven ++;

while-loop   <----------!!!

1.Loop variable  2.condition inside while  3.Loop body  4.Change the loop variable   <----------!!!

var roastGiven = 0;
while(roastGiven < 7) {
  console.log('Roast Den, Please.')
  console.log(roastGiven);
  roastGiven++;
}

for-loop   <----------!!!
Run and Debug   <-----------!!!

let sum=0; 
for( let i = 0; i<=3;i++){ 
  sum = sum + i;
  console.log(sum)
}

Output:0,1,3,6

*************************/


/********** !!!-----even-----!!! **********/


/*************************

numbers   <----------!!!

Display: 1 to 20 all number

var number = 1;
while(number <= 20){
  console.log(number);
  number++;
}

even   <----------!!!

Display: 1 to 30 all even number

var number = 0;
while(number <= 30){
  console.log(number);
  number = number + 2;
}

odd   <----------!!!

Display: 1 to 30 all odd number

var number =1;
while(number <= 30){
  consol.log(number);
  number = number + 2;
}

*************************/


/********** !!!-----for-----!!! **********/


/*************************

while-loop   <----------!!!

var roastGiven = 0;
while(roastGiven < 7 ){
  console.log('Roast Den, Please...')
  roastGiven++;
}

------------------------------------------------------------

for-loop   <----------!!!

for(var roastGiven = 0; roastGiven < 7 ; roastGiven++){
  console.log('Roast Den, Please ...');
}

simple version of for loop   <----------!!!

for(var i = 0; i < 7; i++){
  console.log(i);
}


for(var i = 1; i <= 10; i++){
  console.log(i);
}

even   <----------!!!

for(var i = 0; i <= 20; i+=2){
  console.log(i);
}

odd   <----------!!!

for (var i = 1; i<=20; i+=2){
  console.log(i);
}

*************************/


/********** !!!-----array-loop-----!!! **********/


/*************************

for(var i = 0; i < 10; i++){
  console.log(i);
}

display: every elements of an array

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  console.log(number);
}

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i = 0; i < items.length; i++){
  var item = items[i];
  console.log(item);
}

*************************/


/********** !!!-----break-----!!! **********/


/*************************

while loop break  <-----!!!

var roastGiven = 0;
while(roastGiven < 10){
  console.log('Roast Den gift ansi.');
  roastGiven++;
  if(roastGiven >=5){
    break;
  }
}

for loop break  <-----!!!

for(var i = 1; i <= 20; i++){
  console.log(i);
  if(i > 5){
    break;
  }
}

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    break
  }
  console.log(marks[i]);
};

var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i = 0; i < items.length; i++){
  var item = items[i];
  if(item == 'pen'){
    break;
  }
  console.log(item);
}

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  if(number > 100){
    break;
  }
  console.log(number);
}

*************************/


/********** !!!-----continue-----!!! **********/


/*************************

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  if(number > 50){
    continue;
  }
  console.log(number);
}


var marks = [ 13, 15, 14, 20, 18];

for(var i=0; i<marks.length; i++){
  if(marks[i] >=15){
    continue;
  }
  console.log(marks[i]);
};

*************************/


/********** !!!-----reverse-----!!! **********/


/*************************

(while loop) normal way   <-----!!!

var num = 1; 
while(num <= 10){
  console.log(num);
  num++;
}

(while loop) reverse way   <-----!!!

var num = 10;
while(num >= 1 ){
  console.log(num);
  num--;
}

-----------------------------------------------------------

(for loop) normal way   <-----!!!

for(var i = 1; i <= 10; i++){
    console.log(i);
}

(for loop) reverse way   <-----!!!

for(var i = 10; i >= 1; i--){
    console.log(i);
}

**************************/