// Rulse to declaration variables
// i) variables contain letter number underscore and dollor symbol
// ii) can not start with number
// iii) can't use let var const keyword

// let name = "codex";
// console.log(name);


// https://github.com/Iamvivek-gupta/mean-fundamentals-batch1

//  git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Iamvivek-gupta/mean-fundamentals-batch1.git
// git push -u origin main

// <<<<<<< HEAD
//console.log("hello vedant");

//=======
// declaration assignment operator assign a value
// var firstName = "code";
// var lastName = "x";

// var intro = "hi my name is " + firstName + lastName;
// console.log(intro);

// ==,  === (comparison operator)
// var val1 = 7;
// var val2 = "8";
// console.log(val1 == val2);

// == (checks only asigned value)
// == (checks both asigned value and datatype)

// Boolean 

// var status = "false";
// console.log(typeof status);

//console.log( 1 == true);

// var value = null;
// console.log(value);

// var name1;
// console.log(typeof name1);

//console.log(null == undefined);

// Arithmetic Operator
// var x = 14;
// var y = "hi";
// var sub = x - y;
// console.log(typeof sub);


// var x = 2*2+2;
// var y = 2*(2+2)
// console.log(x, y);

// var name = ["komal",true, 2, null, undefined];
// console.log(typeof name);
// Arithmatic Operator


//console.log(20 <= 20);

// condition


//1. if statement

        // if(expression){
        //    content to be executed
        //   }


//if(-5 < -6){
  //  console.log("hallo vijay");
//}    

// 2. if else statement
// syntax
// if(expression){
//     content to be execute
// } else {
//     content to be executed
// }
// if(-5 < -6){
//     console.log("hallo vijay");
// } else {
//     console.log("halo Codex");
// }


// 3. else if statement

// if(expression){
//     content to be executed
// } else if(expression){
//     content to be executed
// } else {
//     content to be executed
// }

// var a = 10;
// var b = 20;
// if(b > b){
//     console.log("hallo Komal");
// } else if( b < a) {
//   console.log("hallo vijay");
// } else{
//     console.log("hallo vedant");
// }
// 2,4,6,8,10
//var a = 4;
//if (a%2===0){
  //  console.log("given number is even " + a);
//} else {
  //  console.log("given number is odd " + a);



//var a=20;  
//if(a==10){  
 //   console.log("a is equal to 10");  
//}  
//else if(a==15){  
  //  console.log("a is equal to 15");  
//}  
//else if(a==20){  
  //  console.log("a is equal to 20");  
//}  
//else{  
  //  console.log("a is not equal to 10, 15 or 20");  
//} 
//>>>>>>> e9842a4dded4429ed207286bd5a60a0ac6de08bb
//var b = [];
//b.push(1,2,3)
//console.log(b);

//var b =[1,2,3,4,5,6,7];
//var odd = [];
//for(i=0; i< b.length; i++){
//{    if(b[i])
//}
//}

//console.log(even);

//PUSH method adds one or more element for the end of an array. 
//POP method removes the last element from an array, and returns that removed  element, this method also change the length of an array. 
//shift removes the first element from an array and return the moved element, this method also change the length of an array.
// un shift method add one or more element to the begining of an array. and return the new lenght of an array

var arr = [1,4,5,9,7,6,2];


var max = arr[0];

for(var i=0; i< arr.length; i++){
    if (arr[i] >= max) {
        max = arr[i];
           }
}

console.log(max);


