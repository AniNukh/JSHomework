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

