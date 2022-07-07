"use strict";

function conv(oz, mile , lbs){
    return`liter: ${ oz / 33.814} , km : ${mile / 0.621} , kg : ${lbs * 2.2046}`;
}
console.log(conv(100, 100 , 1));
console.log(conv(34 , 50 ,60 ));
console.log(conv(16 , 1200 ,90 ));

//* shrjan

function circleVal(rad){
    return`p: ${2 * Math.PI * rad}, ar:${Math.PI * Math.pow(rad,2)}`;
}
console.log(circleVal(10));
console.log(circleVal(8));
console.log(circleVal(30));

//* 

const x = (a, b ,c) => (a + b) / c;
console.log(x(2,10,6));
console.log(x(5,30,5));
console.log(x(54,18,4));

//* 

const k = (arg1 ,arg2, arg3) => {
    if(arg1 > arg2 && arg1 > arg3){
    return arg1;
    } else if(arg2 > arg1 && arg2 > arg3){
        return arg2; 
    } 
    return arg3;
};
console.log(k(20,10,30));
console.log(k(18,8,15));
console.log(k(25,1,350));
 
//*

let a = [2, 8, 73, 29, 37, 66];
for(let i = 0; i < a.length ; i++ ){
  a[i]++;
}
console.log(a);

//** */

function animal (b){
    if (b === "dog"){
    console.log("haf-haf");
    }else if (b === "cat"){
     return "meou-meou";
    } else {
        console.log("uncorrect animal)");
    }
}
 console.log(animal("cat"));
 
 //** */

 function calc (number1, number2, oper){
    if (oper === "+"){
        return number1 + number2;
    } else if (oper === "-"){
        return number1 - number2;
    } else if (oper === "*"){
        return number1 * number2;
    } else if (oper === "/"){
        return number1 / number2;
        
    }
 }
 console.log(calc(25 ,5 , "+"));

 //* 

 function grig (arr){
   let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
 }
 console.log(grig([2, 6, 7, 9]));

 //** */

 function fib ( r ){
    let arr = [0, 1];
    for (let i = 2; i <= r; i++ ){
        arr[i] = arr[i-1] + arr[i-2];
    }
  return arr;  
 }
 console.log(fib(10));

 //* 

 function fact (number){
    let sum = 1;
    for(let i = 1; i <= number; i++ ){
        sum *= i; 
    }
    return sum;
 }
 console.log(fact(6));

/*
primitive types

number 
string
boolean
null
undefind
Nan

bigint
symbol

referance types 

object
function 
array
new Error
new Date
new RegExp


boolenan operators

>
<
>=
<=
=
==
===
!
!=
!==
%
&&
|| 


*/ 



