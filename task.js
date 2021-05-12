/* [1,2,3,6,7,8,9] 
// [1,2,3,4,5,7,8,9]
// [1,2,3,6,7,8,9]  find the missing element
// "lotus" // "Lotus"
// [1,2,1,3,4,6,4,2] */

let missing = [1,2,3,6,7,8,9];
let element=[];
for (let i=0;i<missing.length;i++){
    if(missing[i]!=i)
    element.push(missing[i]);
}

console.log(element);


let str : "lotus";
let textformat = (str){
    str[0].toUpperCase() + str.slice(1); 
} 
 console.log(str);

 let array = [2,3,4,5,67,89]
 function removeElement(arr, value){
     let start = arr.indexOf(value);
     arr.splice(start, 2);
     console.log(arr);