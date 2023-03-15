"use strict";

const numberOfFIlms = +prompt('How many films did you see?', ''),
      personalMovieDB = {
        count: numberOfFIlms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      },
      filmName = prompt('Last film?', ''),
      filmRaiting = prompt('Raiting?', ''),
      filmName2 = prompt('Last film?', ''),
      filmRaiting2 = prompt('Raiting?', '');

personalMovieDB.movies[filmName] = filmRaiting;
personalMovieDB.movies[filmName2] = filmRaiting2;

console.log(personalMovieDB);

