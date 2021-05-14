
/************* Maximum Value ***************/

// let max= [1,2,3,106,7,98,12,17];
// let x=max[0];
// for(let i=1 ;i<max.length;i++){
//     if(max[i] >x){
//         x=max[i];
// }
// }
// console.log(x);


/***************** UpperCase *******************/
let word = "lotus is flower"; 
console.log(word);
result = word.split(" ");
console.log(result);
for (var i = 0; i < result.length; i++) {
  result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1,2); 
}
console.log(result);

/*******************removed element************* */
// var nums=[1,2,3,4,5,6,7];
// let removedElement=function(nums,value)
// {
// let start= nums.indexOf(value);
// nums.splice(start,1);
// return(nums);
// }
//   console.log(removedElement(nums,6));