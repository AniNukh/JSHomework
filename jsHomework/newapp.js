"use strict";

const film = {
    name: "The Green Mile",
    year: 1999,
    directedBy: "Frank Darabont",
    basedon: "Stephen King",
    runningTime: 189,
    budget: 60000000,
    boxOffice: 286800000,
    isThisOneOfTheBestFilms: true
};

const copyFilm = copyObj(film);
copyFilm.name = "The Shawshank Redemption";
copyFilm.year = 1994;
copyFilm.directedBy = "Frank Darabont";
copyFilm.basedon = "Stephen King";
copyFilm.runningTime = 142;
copyFilm.budget = 25000000;
copyFilm.boxOffice = 73300000;
copyFilm.isThisOneOfTheBestFilms = true;

console.log(film);
console.log(copyFilm);

function copyObj(object){
    const objectCopy = {};

    for (let key in object){
        objectCopy[key] = object[key];
    }

    return objectCopy;
}


// * 

const names = ["Անահիտ", "Աստղիկ", "Նանե", "Ծովինար"];

const copyNames = cArr(names);
names[0] = "Վահագն";
names[2] = "Մենուա";

console.log(names);
console.log(copyNames);

function cArr (main){
    const arr = [];

    for (let i in main){
        arr[i] = main[i];
    }
    return arr;
}

