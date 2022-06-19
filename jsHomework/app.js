"use strict";

const bav = {

   brandy: { 
    brName : "Ararat Erebuni",
    brBrand : "Ararat",
    brAge : 70 ,
    brVol : 0.75 ,
    isThisTheMostEspensive : true ,
    brPrise : 2100000
},
  whiskey: {
    brName : "Royal Salute",
    brAge : 62 ,
    brVol : 1 ,
    isThisTheMostEspensive : true ,
    brPrise : 1120000
  }
};

// if, else

if(bav.brandy.brName === "Ararat Erebuni" ){
    console.log("It's original brandy");
}else if (bav.brandy.brName === "Erebuni") {
    console.log("Its Erebuni");
}else{
    console.log(`It's nor "Ararat Erebuni"`);
}

if (bav.brandy.brAge != 70 ) {
    console.log("Not more than 70 years old");
}else if(bav.brandy.brAge >= 70 ){
    console.log("More than 70 years old");
}else{
    console.log("Not original");
}

if(bav.brandy.brVol < 0.75 ){
    console.log("Too little");
}else if(bav.brandy.brVol > 0.75){
    console.log("Too big");
}else {
    console.log("Right size");
}

if( ! bav.brandy.isThisTheMostEspensive){
    console.log("This is not the most expansive Armenian brandy");
}else if( !! bav.brandy.isThisTheMostEspensive){
    console.log("This is the most expansive Armenian brandy");
}else{
    console.log("fails");
}

if(bav.brandy.brPrise < 2100000){
    console.log("It's not so expansive");
}else if(bav.brandy.brPrise >= 2100000){
    console.log("It's realy expansive brandy");
}else{
    console.log("not so much)");
}

if(bav.whiskey.brName === "Royal Salute" ){
    console.log("It's original whiskey");
}else if (bav.whiskey.brName === "Chivas") {
    console.log("Chivas");
}else{
    console.log(`It's nor ""Royal Salute"`);
}
if (bav.whiskey.brAge != 62 ) {
    console.log("Not more than 62 years old");
}else if(bav.whiskey.brAge >= 62 ){
    console.log("More than 62 years old");
}else{
    console.log("Not original");
}

if(bav.whiskey.brVol < 1 ){
    console.log("Too little");
}else if(bav.whiskey.brVol > 1){
    console.log("Too big");
}else {
    console.log("Right size");
}

if( ! bav.whiskey.isThisTheMostEspensive){
    console.log("This is not the most expansive whiskey");
}else if( !! bav.whiskey.isThisTheMostEspensive){
    console.log("This is expansive whiskey");
}else{
    console.log("fails");
}

if(bav.brandy.brPrise < 1120000){
    console.log("It's not so expansive");
}else if(bav.brandy.brPrise >= 1120000){
    console.log("It's realy expansive whiskey");
}else{
    console.log("not so much)");
}

if(bav.brandy.brAge < bav.whiskey.brAge ){
    console.log("false");
}else{
    console.log("Brandy is older than whiskey");
}

if(bav.brandy.brPrise !== bav.whiskey.brPrise ){
    console.log("Wiskey is cheaper than brandy");
}else{
    console.log("no metter");
}


//ternary

console.log(`
 Name : ${ bav.brandy.brName === "Ararat Erebuni" ? "It's original brandy": `It is not "Ararat Erebuni"`}
 Brand : ${ bav.brandy.brBrand !== "Ararat" ? "Its not Ararat" : "its Ararat brand" }
 Age : ${ bav.brandy.brAge >= 70 ? "More than 70 years old" : "Not more than 70 years old"}
 Size : ${ bav.brandy.brVol === 0.75 ? "Right size" : "Too little" }
 Expensive : ${! bav.brandy.isThisTheMostEspensive ? "This is not the most expansive Armenian brandy" : "This is the most expansive Armenian brandy" }
 Prise : ${bav.brandy.brPrise >= 2000000 && bav.brandy.brPrise <= 2500000 ? "It's realy expansive" : "It's not expansive"}
`);

