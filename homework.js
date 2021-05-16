// var a=[1,2,3,4,6]
// var expectedNo=a.length+1
//  var totalSum=expectedNo*(expectedNo+1)/2
//  //console.log(totalSum);
//  var sum=0;
//  for(i=0;i<a.length;i++){
    
//      sum=sum+a[i];
    

//  }
//  console.log(totalSum-sum);
// // 

//*****     perfect solution  ****** */

// var arr=[1,2,3,6]
// var missarray=[]

// var minValue=Math.min(...arr)
// var maxValue=Math.max(...arr)

// for(let i=minValue;i<maxValue;i++){
//       if(arr.indexOf(i)<0){


//         missarray.push(i)
//       }

     

// }
//  console.log(missarray);

/******************  Remove Duplicate************/
        
// var arr=[1,2,2,3,4,5]
// var  b=[]
// for(let i of arr ){
//     if(b.indexOf(i)===-1){
//    b.push(i)

//     }
   

// }
// console.log(b);     


/***************** find max ****************/
a=[11,5,7,10,12,13]
// var max=a[0];
//   for(let i=1;i<=a.length;i++){
//       if(a[i]> max){
//            max=a[i]

// 	  }
	  
//   }
// console.log(max);

        for( i=1;i<16;i++){
          

                
            if(i%3==0){
              console.log("buzz");
            
           } 
           else if(i%5==0){
               console.log("fizz");
           }
        
          

      
         else{
            console.log(i);            
      
           }
  



        }