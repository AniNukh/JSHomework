"use strict";
 
let i = 20;
 while (i !== 5) {
    console.log(i);
    i--;
 }

 let f = 20;
 while (f) {
    f--;
    console.log(f);
 }
    
 // 0 ից 20 գումար 
 let sum = 0;
 let լ = 0;
 while(լ <= 20){
 sum = sum + լ;
 լ++;
 }
 console.log(sum);

// 5-10 * 

let a= 5;
let summ = 1;
while(a <= 10 ){
    summ = summ * a;
    ++a;
}
console.log(summ); 

// 0-10 զույգ թվերի գումար

let m = 0;
let c = 0;
while(m <= 10){
   c = c + m;
    m += 2;
   
}
console.log(c);

// *

let n = 0;
while(n >= -100){
 console.log(n);

 if(n === -20){
   break;
 }
 n--;
}

// *  do while

let k = 50;

do{
  
   console.log(k);

   if(k === -656){
      break;
   }

k--;
} while(k <= 100);

let q = 50;

do{
  
   console.log(q);

   if(q === -656){
      break;
   }

q--;
} while(q >= 100);

// for *  0-20 կենտեր

for(let i = 0; i < 20 ; i++){
   if(i % 2 === 0) continue;
   console.log(i);
}



//* ամենամեծ թիվը

let arr = [5,47,3,88,517,60,147,368];

let big = arr[0];

for(let i =0; i < arr.length ; i++){
    big =arr[i] > big ? arr[i] : big;
}
console.log(big);

// *
 



