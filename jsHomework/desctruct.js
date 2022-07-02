"use strict";

const colors = ["կանաչ", "կապույտ", "կարմիր", "գազարագույն", "ծիրանագույն"];

const [a, b, c, d, e] = colors;

console.log(`Հայաստանի դրոշի գույներն են՝ ${c} ${b} ${e} `);

//*

const calc = [25, 10, 3, 5, 100];

const [firstNum, secondNum, thirsNum, fourthNum, fifthNum] = calc;

console.log(((fifthNum / firstNum * secondNum) - fourthNum) % thirsNum );

//*

const array = [[[[[["Armenia"]]]]],[[[[["Spain"]]]]],[[[[["Greece"]]]]],[[[[["Italy"]]]]]];

const [yerevan, madrid, athens, rome] = array;

console.log(`Yerevan is capital of ${yerevan} \n Madrid is capital of ${madrid} \n Athens is capital of ${athens} \n Rome is capital of ${rome}`);

//* 

const obj = {
    name: "Hayao Miyazaki",
    age: 81,
    profession: "animator",
    country: "japan",
    mostPopularAnimes: {
        an1: "Spirited Away",
        an2: "Howl's Moving Castle",
        an3: "Princess Mononoke",
        an4: "My Neighbor Totoro",
        an5: "Kiki's Delivery Service"
    }
};

const {name , age , profession , country, mostPopularAnimes} = obj;
const {an1, an2, an3, an4, an5} = obj.mostPopularAnimes;
console.log(`Hi, my name is ${name}. I am ${age} years old. I'm one of the best ${profession}s of the world. The most popular of my works are ${an1}, ${an2}, ${an3}, ${an4}, ${an5}.`);

//*

const harryPotter = {
    autor: "J K Roaling",
    numOfBooks: 7,
    numOfMovies: 8,
    books: {
        first: "Philosopher's Stone",
        second: "Chamber of Secrets",
        third: "Prisoner of Azkaban ",
        fourth: "Goblet of Fire ",
        fifth: "Order of the Phoenix",
        sixth: "Half-Blood Prince",
        seventh: "Deathly Hallows",
        yearsOfBooks: [1997, 1998, 1999, 2000, 2003, 2005, 2007]
    },
    movies: {
        one: "Philosopher's Stone",
        two: "Chamber of Secrets",
        three: "Prisoner of Azkaban ",
        four: "Goblet of Fire ",
        five: "Order of the Phoenix",
        six: "Half-Blood Prince",
        seven: "Deathly Hallows Part 1",
        eight: "Deathly Hallows Part 2",
        yearsOfMovies: [2001, 2002, 2004, 2005, 2007, 2009, 2010, 2011 ]

    }
};
const {autor, numOfBooks,numOfMovies} = harryPotter;
const { first, second, third, fourth, fifth, sixth, seventh, yearsOfBooks } = harryPotter.books;
const [fr, sc, th, fo, fi, si, se] = harryPotter.books.yearsOfBooks;
const { one, two, three, four, five, six, seven, eight, yearsOfMovies } = harryPotter.movies;
const [on, tw, t, fu, f, s, sev, ei] = harryPotter.movies.yearsOfMovies;

console.log(autor +"\n"+ numOfBooks);
console.log(first, fr +"\n"+ second, sc +"\n"+ third, th +"\n"+ fourth, fo +"\n"+ fifth, fi +"\n"+ sixth, si +"\n"+ seventh, se +"\n");
console.log(numOfMovies); 
console.log(one, on +"\n"+ two, tw +"\n"+ three, t +"\n"+ four, fu +"\n"+ five, f +"\n"+ six, s +"\n"+ seven, sev +"\n"+ eight, ei );