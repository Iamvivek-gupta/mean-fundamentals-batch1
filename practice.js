// Program for remove 9 from array 
 //let nums = [1,2,3,4,9,6,7,8,9,9];
//  console.log(nums.splice(8,2));
//  console.log(nums.slice(0,3));   

 //let original_name = "congratulations";
//  console.log(original_name+" "+"original string");
//  console.log(original_name.slice(0,7)+'s');

 //let original_number = [1,2,3,4,5,6,7,8,9,10];
//  console.log(original_number.slice(3,7));

/*  ************************ Slice() method returns *****************

    given index values start to end points.console

    if we give slice(3,8);
    
    in array Index 3 to Index 8 values are returns.

************************************************************** */


/*  ************************ splice() method returns *****************

    nums.splice(1 , 3);

    1 is starting index , and 3 is 3 element removes from start index. and returns remove elements

    i. let nums = [1,2,3,4,5,6,7,8,9];

     console.log(numbs.splice(0 , 3));

     ouptput : [1 , 2, 3];

    ii. 
        let nums1 = [1,2,3,4,5,6,7,8,9];

        console.log(nums1.splice(0 , 3));
        console.log(nums1);

        output : [1, 2, 3];
        [4, 5, 6, 7, 8, 9,];

    given index values start to end points.console

    if we give slice(3,8);
    
    in array Index 3 to Index 8 values are returns.

************************************************************** */


//  console.log(nums);
 //splice(start, deletedcount, element)

 /*for(var i=1; i<nums.length; i++)
 {
     if(nums.indexOf(i) == 9)
     {
         console.log("original array");
         console.log(nums.indexOf(i));
         console.log("end of array");
     }
    //  else{
    //      console.log(nums); 
    //  }
 }*/


//********************** */ Remove 9 from arrray /********************** */
 
/*let nums = [1,2,3,4,9,6,7,8,9,9];

 for(var i=0; i< nums.length; i++)
 {
     //console.log(nums[i]);
     if(nums[i] != 9)
     {
        var duplicate= [] 
        console.log(nums[i]);
        duplicate.push(nums[i]);

     }
   }

*/
//    ************************** END ********************************

//!!!!!!!!!!!!!!!!!!!!!!!!    11 May 2021 !!!!!!!!!!!!!!!!!

// Q.1 : // [1,2,3,4,5,7,8,9] :::::::::: Find missing element from array

let originalArray = [1,2,3,4,5,7,8,9];
console.log(originalArray);

// for(let i=0; i< originalArray.length; i++)
// {

// }



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Q. 2 : "lotus" : output : "Lotus" -> title Caps

// var str = "lotus";
// console.log(str);
// console.log(sttoUpperCase);


/* let str1 = str.split("");
console.log(str1);

for(let i =0 ; i< str1.length; i++){
    var str2 = str1[0].toUpperCase();
}
console.log(str2);

let result = str2.split("").join("");
console.log(result);
*/

// let reverse = str1.reverse();
// console.log(reverse);

// for(let strCaps of str)
// {
//     console.log(strCaps);
//     // console.log(strCaps.jo(""));
// }









// [1,2,3,4,5,7,8,9]
// [1,2,3,6,7,8,9]  find the missing element
// "lotus" // "Lotus"
// [1,2,1,3,4,6,4,2]

// ****************************** 12 May 2021 *********************

// Q.2 a.: First letter Captial
/*
let word = "lotus"; //
let titleCase = word[0].toUpperCase() + word.slice(1);
console.log(titleCase);
*/


/*
**************************************************************
 *************************************************************
//Q.2) b. In Below words All letter will be capital


let word = "lotus is flower"; //
let divideWord = word.split(" ");
console.log(divideWord);

let newCapsarry = [];
for(let a of divideWord)
{
    newCapsarry.push(a.toUpperCase());
    console.log(a.toUpperCase());
}
console.log(newCapsarry.join(" "));
// END
**********************************************************
**********************************************************
*/
    //    12 May 2021

/*
**********************************************************************
 *********************************************************************
//Q.2) c. In Below words First letter will be capital */
/*
let originalStr = "lotus is flower of garden";
console.log(originalStr);

// seperate this string using blank spaces and convert into array .
let splitArray = originalStr.split(" ");
//console.log(splitArray);

// to iterate array , need to take for loop.

for(let i=0; i<splitArray.length; i++)
{
    //console.log(splitArray[i]);
    var newArry = [];
   // console.log(splitArray[i].charAt(0).toUpperCase());
    let newCap = splitArray[i].charAt(0).toUpperCase();
    //console.log(newCap); 
     newArry.push(newCap + splitArray[i].substr(1));
     //console.log(newArry.join(''));
     var strUpdate = newArry.join('');
     console.log(strUpdate);
}
// console.log(newArry);

// */
// *****************************************************************************
    // OUTPUT : Lotus Is Flower Of Garden
// *****************************************************************************



 /* **************************** substr **********************

let str1 = "student";
console.log(str1.substr(3));

********************** END ********************
*/

/*  
*****************************************************************************************

 Q.3  // let x = [1,2,3,6,7,8,9,12,15];// max -> 1 to max ==== Find max number in array

**********************************************************************************************
*/

let x = [1,2,3,6,7,8,9,12,15];

let abc = x.length;
console.log(abc);


// for(let a of x)
// {
//     if(x.indexOf(a) ==)
//     {
//         console.log(a);

//     }
// }









