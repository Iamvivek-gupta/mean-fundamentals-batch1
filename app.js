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


if(-5 < -6){
    console.log("hallo vijay");
}    

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
// var a = 4;
// if (a%2===0){
//     console.log("given number is even " + a);
// } else {
//     console.log("given number is odd " + a);
// }



// var a=20;  
// if(a==10){  
//     console.log("a is equal to 10");  
// }  
// else if(a==15){  
//     console.log("a is equal to 15");  
// }  
// else if(a==20){  
//     console.log("a is equal to 20");  
// }  
// else{  
//     console.log("a is not equal to 10, 15 or 20");  
// } 


// Logical Operator (&& , ||)
//console.log(10==="10" || 30=="30");
// operand
// AND Operator
// OR Operator
// NOT Operator (!)
// console.log(!false);

// var arr= [1,2,3,4];
// arr[5] =8;
// arr[4]=15;

//console.log(arr.indexOf(19));
// var sum = arr[0] + arr[1] +arr[2] + arr[3];
// console.log(sum);

// arr.push(3,3,4,5,6,7,8);
// console.log(arr);

// var arr= [1,2,3,4];
// var mul = 1;
// for(i=0; i< arr.length; i=i+1){
//     console.log("index here",i);
//     console.log("value here", arr[i]);
//     console.log("mul value here", mul);
//     mul = mul * arr[i];
//     console.log("product here",mul);
// }
// console.log(mul);

// i=0 arr[0]= 1 result = 0 +1 =1;
// i=1 arr[1]= 2 result = 1 +2 =3;
// i=2 arr[2]= 3 result = 3 +3 =6;
// i=3 arr[3]= 4 result = 6 +4 =10;
// var b = [1,2,3,4,5,6,7,8];
// var even = [];
// for(i=0; i< b.length; i++){
//     if(b[i]%2 !==0){
//         even.push(b[i])
//     }
// }

// console.log(even);

// HW
// var c = [1,2,3,4,5,6];
// console.log(c.push(12));
// console.log(c);

//Array
// pop 
// var d = [1,2,3,4,5,6];
// console.log(d.pop());
// console.log(d);

//shift
// var sh  = [4,5,6,7,8,9];
// console.log(sh.shift());
// console.log(sh);

// unshift
// var us = [1,2,3,4,5,6];
// console.log(us.unshift(12,13,14));
// console.log(us);
// WAP to find factorial of a number
var n = 3;
console.log("hallo factorial");
var factorial = 1;
for(i=n; i>=1; i--){
    factorial = factorial * i;
}

console.log(factorial);

//var arr = [1,2,3,4,5,6]

