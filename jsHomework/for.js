"use strict";

const barca= {
    
    president: "Joan Laporta",
    coach: "Xavi",
    founded: 1899,
    ground: "Camp Nou",
    honours: {
        UEFASuperCup: {
            y1: 1992,
            y2: 1997,
            y3: 2009,
            y4: 2011,
            y5: 2015
        },
        FIFAClubWorldCup: {
            year1: 2009,
            year2: 2011,
            year3: 2015
        }
    },
    firstTeam2022: {
        Goalkeeper: {
            one: "Marc-André ter Stegen",
            two: "Neto",
            three: "Inaki Pena"
        },
        Defender: {
            one: "Sergino Dest",
            two: "Ronald Araujo",
            three: "Oscar Mingueza",
            four: "Eric Garcia",
            five: "Jordi Alba",
            six: "Clement Lenglet",
            seven: "Pique",
            eight: "Samuel Umtiti",
            nine: "Alex Balde",
            ten: "Dani Alves",
            eleven: "Moussa Wague",

        },
        Midfielder: {
            one: "Alex Collado",
            two: "Sergio Bosquets",
            three: "Miralem Pjanic",
            four: "Busquets",
            five: "Frenkie de Jong",
            six: "Pedri",
            seven: "Riqui Puig",
            eight: "Gavi",
            nine: "Nico Gonzalez",
            ten: "Sergi Roberto",

        },

        Forward: {
            one: "Adama Traore",
            two: "Pierre-Emerick Aubameyang",
            three: "Martin Braithwaite",
            four: "Luuk de Jong",
            five: "Ousmane Dembélé",
            six: "Ansu Fati",
            seven: "Memphis Depay",
            eight: "Ferran Torres",
        }
    }

};

for (let key in barca) {
    if (typeof barca[key] === "object"){

        for (let skey in barca[key]){
            if(typeof barca[key][skey] === "object" ){
               
                for (let tkey in barca[key][skey]){
            
                    console.log(`${key}: ${skey}: ${tkey}:  ${barca[key][skey][tkey]} `);
                }
            } else{
                console.log(`${key}:  ${skey}: ${barca[key][skey]}`);
            }

        }
    } else {
        console.log(`${key}:  ${barca[key]}`);
    }
    
}

//* 

//object
const obj = {
    myFunction1 (){
        console.log("hi");
    },
    myFunction2 (){
        console.log("my");
    },
    myFunction3 (){
        console.log("name");
    },
    myFunction4 (){
        console.log("is");
    },
    myFunction5 (){
        console.log("Ani");
    }
};

const {myFunction1, myFunction2, myFunction3, myFunction4, myFunction5} = obj; 
myFunction1();
myFunction2();
myFunction3();
myFunction4();
myFunction5();

// array 

const arr = [
    function a(){
        console.log("HI");
    },
    function b(){
        console.log("DEAR");
    },
    function c(){
        console.log("GROUP");
    }

];


const [x,y,z] = arr;
x();
y();
z();




