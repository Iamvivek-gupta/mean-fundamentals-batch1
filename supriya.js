//console.log("hallo world");

// variable in javascript
// var a = null;
// console.log(typeof a);

// difference between null and undefined

// arithmtic operator in javascript

// var a = 10;
// var b = "hi";
// var result = a - b;
// console.log(result);


// comparison operator in javascript ==, ===
// let x = true;
// console.log(typeof x);


// array in javascript
//var students = ["vivek", "sayali","supriya","komal"]


// var a = [1,2,3,4,5];
// var b = [6,7,8,9];
// var combineEle = a.concat(b);
// console.log(combineEle);


// var a = [1,2,3,4,5];
// console.log("original array", a);
// console.log(a.push(11,12,13,14,15));

// var fruits = ["banana", "mongo", "papaya"];
// var animal = ["dog", "pickok", "bird"];
// var species = fruits.concat(animal);
// console.log(species);



// increment and decrement operator
// var a = 3;
// console.log(a--);
// console.log(a);


// if else condtion

// if(2 >= 3){
//     console.log("hallo supriya");
// } else if (3 <1) {
//     console.log("hallo vijay");
// } else{
//     console.log("welcome komal");
// }

/*
if(condition){
    code for execution
} else {
    code for execution
}
*/

// ternory operator in js
//2 < 1 ? console.log("halo komal") : console.log("hallo vijay");;
//condition ? if condition true : then this will execute


//var nums = [1,2,3,4,5,6,7,8,9];

//for loop
// let evenNumber = [];
// for(var i = 1; i <= 20; i++){
//     if(i % 2 == 0 ){
//         evenNumber.push(i)
//     }
// }

// console.log(evenNumber);
// let a = []
// for(var i = 1; i <= 20; ++i){
//     if(i > 5){
//         a.push(i)
//     }
// }

// console.log(a);

// [1,2,3,4,5,6]
// [6,5,4,3,2,1]
// let original = [7,8,3,4,5,6];
// let reversre = [];
// for(let i = original.length-1; i >= 0; i--){
//     reversre.push(original[i])
// }
// console.log(reversre);

// let browser = ['chrome','mozila', 'opera', 'egde'];
// console.log(browser.shift());
// console.log(browser);

// let browser = ['chrome','mozila', 'opera', 'egde'];
// console.log(browser.unshift('UC browser','brew'));
// console.log(browser);

// let browser = ['chrome','mozila', 'opera', 'egde'];
// // browser.slice(start, end)
// let b = browser.slice();
// console.log(b);

// let message = 'congratulations';
// let x = message.slice(0,7) + 's!';
// console.log(x);

//let nums = [1,2,3,4,9,6,7,8,9,9];
// console.log(nums.splice(8,2));
// console.log(nums);
//splice(start, deletedcount, element)


// function login(){
//     return "hallo world"
// }

// let result = login();
// console.log(result);

// let login = () => "hallo world"

// console.log(login());

// let mul = (num1, num2) => num1 + num2;

// console.log(mul(2,8));

// let nums = [1,2,3,4,9,6,7,8,9,9];
// let removedNine = [];
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] !== 9){
//         removedNine.push(nums[i]);
//     }
// }
// console.log(removedNine);
// let nums = [1,2,3,4,9,6,7,8,9,9];
// let removedNine = [];
// for(let number of nums){
//     if(number != 9){
//         removedNine.push(number)
//     }
// }
// console.log(removedNine);
// let status = "how are you today?";
// console.log(status.split("a"));

// let fruits = ["banana", "papaya", "apple", "grapes", "mongo"];
// console.log(fruits.reverse());

// let str = "hallo"; //"ollah"
// let result = str.split("").reverse().join("");
// console.log(typeof result);

// Object in Javascript 

// // console.log(Object.keys(student));
// // console.log(Object.values(student));

// student.rollNum = 01;
// student.divison = "abcd";
// delete student.divison;
// console.log(typeof student);

// let arr = [1,"hallo", true, undefined, null, {name:"vivek"}]

// // [1,2,3,4,5,7,8,9]
// // [1,2,3,6,7,8,9]  find the missing element
// // "lotus" // "Lotus"
// // [1,2,1,3,4,6,4,2]
// // [1,2,3,4,6] //16, 21
// let a = [1,2,3,4,5,6,7,8,9,10,12];
// let n = a.length + 1;
// // let sum = n*(n+1)/2;
// // console.log(sum);
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum);
// let add = 0;
// for(let number of a){
//     add = add + number;
// }
// console.log(add);
// let missing = sum - add;
// console.log(missing);
// let x = [1,2,3,6,7,8,9,12,15];// max -> 1 to max
// let max = Math.max(...x);
// let missing = [];
// for(let i = 1; i <= max; i++){
//     if(x.indexOf(i) === -1){
//         missing.push(i)
//     }
// }
// console.log(missing);

// let word = "lotus is flower"; //
// let titleCase = word[0].toUpperCase() + word.slice(1);
// console.log(titleCase);

// let student = {
//     name: "komal",
//     gender: "female",
//     city: "delhi",
//     pincode: 667889
// }

// // Object.freeze(student);
// Object.seal(student);
// delete student['name'];
// console.log(student);

// function in javascript

// login("supriya");
// function login(name){
//     console.log(name + " " + "login succefully");
// }


// let login = function(name){
//     return (name + " login succesfully");
// }

// let login = (name) => console.log(name + " login succesfully");

//login("komal");

// let add = (a,b) => a + b;

// let result = add(5,6); //11
// console.log(result);
// var nums = [1,2,3,4,5,6,7];
// let removedElement = function(arr, value){
//     let start = arr.indexOf(value);
//     arr.splice(start, 1);
//     return arr;
// }

// console.log(removedElement(nums, 6));
// for(let i = 1; i < 16; i++){
//     if(i%3===0 && i%5===0){
//         console.log("fizzbuzz");
//     } else if(i % 3 === 0){
//         console.log("fizz");
//     } else if(i%5===0){
//         console.log("buzz");
//     } else{
//         console.log(i);
//     }
// }

//postman, github

// function factorial(n){
//     let mul = 1;
//     for(let i = n; i >= 1; i--){
//         mul = mul * i;
//     }
//     return mul;
// }
// let result = factorial(3);
// console.log(result);
