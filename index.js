let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many films have you watched?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you watched?", '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//automate questions for visitor
function rememberMyfilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("What was your last film?", '');
        const b = +prompt("How can you rate the film?");
        
        if (a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }else{
            i--;
        }
    }
}
rememberMyfilms();

//feedback info
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('you don`t like films');
    }else if(personalMovieDB.count < 30){
        alert('you sometimes watch films');
    }else if(personalMovieDB.count > 30){
        alert('you are film maniac');
    }else{
        alert('ERROR');
    }
}
detectPersonalLevel();

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

ShowMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite film genre ${i}`);
        personalMovieDB.henres[i-1] = genre;
    }
}

writeYourGenres();