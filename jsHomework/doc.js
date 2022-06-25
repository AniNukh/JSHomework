"use strict";

function calc (x , y , all) {
    switch (all){
        case "+" : console.log(x + y); break;
        case "-" : console.log(x - y); break;
        case "*" : console.log(x * y); break;
        case "/" : console.log(x / y); break;
        case "%" : console.log(x % y); break;
        default: console.log("Մուտքագրել ՝+,-,*,/,%`");
    }

}
calc (9 ,5 , "%");
calc (9 ,5 , "+");
calc (9 ,5 , "-");
calc (9 ,5 , "/");
calc (9 ,5 , "*");



let result = "";
let star= "*";
for (let i = 0; i <= 7; i++) {
    for(let j = 7; j >= i; j--){
        
        if(j === 0){
            result += "*";
            break;      
        }
        if(j === i){
            result += star + "**";
            star += "**";
            break;
        } 
        result += " ";
    }
    result += "\n";
}
console.log(result);

// * 

let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
    let j = 0;
    while (j <= 4){
        console.log(j-5);
        j++;
    }
}

//*
 
for(i=0; i <= 4; i++ ){
    console.log("hi first");
    let j = 0;
    oops:while (j >= -1){
       console.log("hi second");
       j++;
       let k = 0;
       while (k <= 3){
        k++;
        if(k === 3) break oops;
        console.log("hi third");
        
       }
       
    }
}

//*

let all = "";

for (let i = 1; i <= 5; i++) {
    for( let j = 1; j <= (5-i); j++){
        
    }
    for(let k = 1; k <= i ; k++){
        console.log(i);
    }
}
console.log(all);
