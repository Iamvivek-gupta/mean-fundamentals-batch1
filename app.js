// Rulse to declaration variables
// i) variables contain letter number underscore and dollor symbol
// ii) can not start with number
// iii) can't use let var const keyword

//let name = "codex";
//console.log(name);


// https://github.com/Iamvivek-gupta/mean-fundamentals-batch1

//  git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Iamvivek-gupta/mean-fundamentals-batch1.git
// git push -u origin main
  
//let firstname="vijay"
//let lastName="Shirsath"


//  var val1 = 122;
//  var val2 = "67";
//   console.log(val1 == val2);


//  var x = 12;
//  var y = "hellllo";
//  var sub = x - y;
//  console.log(typeof sub);
//  console.log(20 <=20)


 // javascript if else statement  is used to execute code wether condition true or false
// 1. if statement
      //  if(expression)
      //{      content to be executed
//  }
//  else{

                    
//  }
    //  if(-5 < -6)
    //  {
    //          console.log("hello")
    //  } 

     // sytax
// 2. if else statement

// if(expression){
     
//     content to be excuted

// }
// else{
//       content to be executed
// }


// if(-5< -6){
//     console.log("hallo")
// }
// else{
//     console.log("haloo vijay")
// }

//3 else if statement

//   if(expression)
//   { 
//        content to be executed
//   }else if{
//         content to be executed
//   }
//   else{
//       content to be executed
//   }

//console.log(  3%2);

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


// output is a is equal to 20

//AND OPERATOR

//console.log(10=="10" && 30=="30");
//if both opernad true Then result is true otherwise False
//
//OR OPRETOR
//  if either opernd true it will return true
// if both operand  false it will return true
// 
//NOT OPERATOR(!  )

// var c = [1,2,3,4,5,6];
 //c.reverse();
 //console.log(c);

//  var d=[];
//    for(let i=c.length-1;i>=0;i--)
//    {
     
//        d.push(c[i]);
    
         

//    }
//    console.log(d);

// Array:
//  in javascrit an array is datastructure that contains List Of element 
// which stored multiple value in single variable..
// push method add one or more Element to the end of array


//pop
// pop method removes the last element and returns that removed element this mesthod
// also change the length of an array..

// var c = [1,2,3,4,5,6];
// console.log(c.pop());
// console.log(c)
//shift
//shift method removes first element from an array and return that 
//this method also change of element
//  var c = [1,2,3,4,5,6];
//  console.log(c.shift());
//  console.log(c)
// //unshift
// //unshift method add one or more elements to the begining of an array
// //and return new length of array

// var c = [1,2,3,4,5,6];
// console.log(c.unshift());
// console.log(c)

// var c = [1,2,3,4,5,6];
// Math.max.apply(Math, c) 

//  var num=0;
//  var b=-1;
//  var c=0;

//  if(num>-1)
//  {
//        console.log("Number is postive")
//  }
//  else if(b<num)
//  {

//     console.log("Nubser is negetive")
//  }
//  else (c>=0)
//  {
//     console.log("Nubser is Zero")
//  }



//  arrr=[2,3,5,6]
//   var num=12

//   for(i=0;i<=arrr.length-1;i++){
//            if(num % arrr[i]==0){
//                console.log(" divide")
//            }
//            else{
//                  console.log("not divide")
//            }

//   }


// function getname() 
// {
//       let fact = 12;
//       for (i = 1; i<= fact; i++) {
//         fact *=i;
      
//       }
   
//       console.log(fact);
     

// }
// getname();

// console.log("hiiii")

// var person=['vijay',25,{'city':"nashik"}]
// console.log(person.keys)


// function getarray(){
//       var arr=[1,2,3,4,10,6,7,8]
//    var  a=[];
//         for( i=0;i<arr.length;i++){
//                if(arr[i]>arr[5]){
    
//                    a.push(arr[i])

//                } 
//             // console.log(a);

//         }
      

//          console.log(a);
 
//       }
//     getarray()
//  var person = ["vijay", 25, {city: "nashik"}]
//  person[2] = 3;
//  console.log(person);


// function getduplicat(arr){
//     let uniarrry=[];

//        for(let i of arr){
//               if(uniarrry.indexOf(i)===-1){
//                   uniarrry.push(i);       
   

//               }
     


//        }

//         console.log(uniarrry);
          
        


//  }

// var array = [1, 2, 3, 2, 3,4,4];
//  getduplicat(array);


// var a=[1,-2,3,-4,5]
// var b=[]
// for(i=0;i<a.length;i++){
//  if(a[i]>0){
//            b.push(i)
//            console.log(b)
          
//  }
 
     
// }


// 

// var x=[1,2,-3,2.23,-4,3.34,-5,5]
// var b=[]
// for(i=0;i<x.length;i++){

//          if(x[i]>0 && x[i]%1==0 ){

//             b.push(x[i])

//          }
        
// }
// console.log(b)


var arr = [1, -4, 6.1, 0.1, 2.6, 5, -2, 1.9, 6, 8.75, -7, 5]
var b=[]
for(i=0;i<arr.length;i++){
     if(arr[i]>0 && arr[i]%1==0){
         b.push(arr[i]*arr[i])
          
     }
    

}
console.log(b)