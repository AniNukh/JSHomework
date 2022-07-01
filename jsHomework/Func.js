"use strict";

let numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");

while (true){
	if(numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms) ){
		numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");
	} else {
		break;
	}
}

const personalMovieDB = {

	count: numberOfFilms >= 1 ? numberOfFilms : 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	showMyDB () {
		if (personalMovieDB.privat === true){
			console.log(personalMovieDB);
		}else {
			console.log("Մեր ԴԲ ն փակ է");
		}
	},
	yourFavoriteGenres(){
		
		for(let i = 0; i <= 2; i++){
			let x = prompt(`Ձեր նախընտրելի ժանրը  `, "");
			if (x != null && x !== "" && isNaN(x) && x.length < 20){
				personalMovieDB.genres[i] = x;
			}else{
				i--;
			}

		}
	}
};
	
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք կինոման եք !!!");
	} else {
		console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
	}


for (let i = 0; i < 2; i++) {
	const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
	const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		a.trim();
		b.trim();
		personalMovieDB.movies[a] = b;
		console.log("DONE");
	} else {
		console.log("ERROR");
		i--;
	}
}

personalMovieDB.yourFavoriteGenres();
personalMovieDB.showMyDB();