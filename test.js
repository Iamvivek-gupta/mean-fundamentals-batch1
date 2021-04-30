//var a = [ 1,2,3,4,5];
// var sum = 0;
// for(let i = 0; i < a.length; i++){
//     sum = sum + a[i];
// }
// console.log(sum);

// a.forEach(function(e){
//     sum = e + sum;
// })
// console.log(sum);
// let add = 0;

// function sum(){

// }

// sum(a);

// arrow fuction 
// predefined method

// 1. slice()
// var a = [ 1,2,3,4,5];
// console.log(a.slice(1,3));
// array.slice(start, excludedelement)

// 2. splice()
// var a = [ 1,2,3,4,5];
// arraay.splice(start, counttobe deleted, element to be added);
// console.log(a.splice(0, a.length));
// console.log(a);


// let array = [2,3,4,5,67,89]
// function removeElement(arr, value){
//     let start = arr.indexOf(value);
//     arr.splice(start, 2);
//     console.log(arr);
// }
 

// removeElement(array, 67);



// 3 sort()
// let a = [91,2,3,1,4,2,5,67,84];
// // [91,84,2,1,3,2,4,5,67];
// // [91,84,67,1,2,2,3,4,5];
// // [91,84,67,1,2,2,3,4,5];
// // a.sort(function(){
// //     return a - b
// // })

// a.sort( (a,b) => b - a )
// console.log(a);

// function login(username){
//     console.log(username + " login succefully");
// }
 
// login("Vijay");

// let login = (name) => console.log(name + " login succefully");

// login("viajy")


// let area = (width, height) =>  width * height;

// let total = area(3,9);
// console.log(total);

// let sum = (num1, num2) => num1 + num2;
// let result = sum(4, "vivek");
// console.log(result);
let textformat = (str) => str[0].toUpperCase() + str.slice(1);


console.log(textformat("komal"));// Vijay