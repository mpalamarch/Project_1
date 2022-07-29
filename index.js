

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        this.count = +prompt("How many films have you watched?", '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("How many films have you watched?", '');
        }
    },
    rememberMyfilms: function (){
        for (let i = 0; i < 2; i++) {
            const a = prompt("What was your last film?", '');
            const b = +prompt("How can you rate the film?");
            
            if (a != null && b != null && a.length < 50) {
                this.movies[a] = b;
            }else{
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('you don`t like films');
        }else if(personalMovieDB.count < 30){
            alert('you sometimes watch films');
        }else if(personalMovieDB.count > 30){
            alert('you are film maniac');
        }else{
            alert('ERROR');
        }
    },
    ShowMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite film genre ${i}`);
            
                if (genre == '' || genre == null) {
                    console.log('uncorrect data');
                    i--;
                }else{
                    personalMovieDB.genres[i-1] = genre;
                }
        }
        this.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i  + 1} this  is ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if (this.privat == false) {
            this.privat = true;
        }else{
            this.privat = false;
        }

    }


};




