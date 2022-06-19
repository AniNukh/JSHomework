"use strict";


const num = 4;

switch(num){
    case (function(){return 2 * 1})(): console.log(num); break;
    case (function(){return 18 - 6})(): console.log(num); break;
    case (function(){return 24 % 5})(): console.log(`${num} It's right`); break;
    default: console.log("Wrong");
}


