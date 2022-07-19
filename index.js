const numberOfFilms = +prompt("How many films have you watched?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//automate questions for visitor
for (let i = 0; i < 2; i++) {
    const a = prompt("What was your last film?", '');
    const b = +prompt("How can you rate the film?");
    
    if (a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    }else{
        i--;
    }
}

//feedback info
if (personalMovieDB.count < 10) {
    alert('you don`t like films');
}else if(personalMovieDB.count < 30){
    alert('you sometimes watch films');
}else if(personalMovieDB.count > 30){
    alert('you are film maniac');
}else{
    alert('ERROR');
}


console.log(personalMovieDB);
