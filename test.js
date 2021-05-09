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
// let textformat = (str) => str[0].toUpperCase() + str.slice(1);


// console.log(textformat("eomal"));// Vijay
const doctors = [
	{
	  name: 'Doctor-1', state: 'Delhi', years: 12, coe: 'General',
	},
	{
	  name: 'Doctor-2', state: 'Telangana', years: 15, coe: 'heart',
	},
	{
	  name: 'Doctor-3', state: 'Delhi', years: 25, coe: 'general',
	},
	{
	  name: 'Doctor-4', state: 'Mumbai', years: 21, coe: 'skin',
	},
	{
	  name: 'Doctor-5', state: 'Delhi', years: 6, coe: 'skin',
	},
	{
	  name: 'Doctor-6', state: 'Mumbai', years: 14, coe: 'lungs',
	},
	{
	  name: 'Doctor-7', state: 'Delhi', years: 23, coe: 'heart',
	},
	{
	  name: 'Doctor-8', state: 'Telangana', years: 10, coe: 'heart',
	},
	{
	  name: 'Doctor-9', state: 'Delhi', years: 11, coe: 'heart',
	},
	{
	  name: 'Doctor-10', state: 'Mumbai', years: 12, coe: 'heart',
	},
	{
	  name: 'Doctor-11', state: 'Telangana', years: 13, coe: 'heart',
	},
	{
	  name: 'Doctor-12', state: 'Delhi', years: 18, coe: 'heart',
	},
	{
	  name: 'Doctor-13', state: 'Mumbai', years: 5, coe: 'heart',
	},
	{
	  name: 'Doctor-14', state: 'Delhi', years: 4, coe: 'general',
	},
	{
	  name: 'Doctor-15', state: 'Mumbai', years: 4, coe: 'lungs',
	},
	{
	  name: 'Doctor-16', state: 'Delhi', years: 3, coe: 'heart',
	},
	{
	  name: 'Doctor-17', state: 'Delhi', years: 2, coe: 'lungs',
	},

  ];
doctors.forEach( (el, index) => el.id = index + 1);
console.log(doctors);


var value = [1,2,3,4,6,7];
