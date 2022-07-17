const numberOfFilms = +prompt("How many films have you watched?", '');
const a = prompt("Wwhat was your last film?", '');
const b = +prompt("How can you rate the film?");
const c = prompt("Wwhat was your last film?", '');
const d = +prompt("How can you rate the film?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);