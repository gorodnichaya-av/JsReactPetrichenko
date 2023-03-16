/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFIlms;

function start() {
  numberOfFIlms = prompt('How many films did you see?', '');

  while (numberOfFIlms == '' || numberOfFIlms == null || isNaN(numberOfFIlms)) {
    numberOfFIlms = prompt('How many films did you see?', '');
  }
};

start();

const personalMovieDB = {
        count: numberOfFIlms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      };


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const filmName = prompt('Last film?', ''),
        filmRaiting = prompt('Raiting?', '');
  
    if (filmName != null && filmRaiting != null && filmName != '' && filmRaiting != '' && filmName.length < 51) {
      personalMovieDB.movies[filmName] = filmRaiting;
    } else {
      i--;
    }
  };
}

rememberMyFilms();

/* let start = 1;
while (start <= 2) {
  let filmName = prompt('Last film?', ''),
      filmRaiting = prompt('Raiting?', '');

  personalMovieDB.movies[filmName] = filmRaiting;
  start ++;
};*/

/*do {
  let filmName = prompt('Last film?', ''),
      filmRaiting = prompt('Raiting?', '');

  personalMovieDB.movies[filmName] = filmRaiting;
  start ++;
}
while (start <=numberOfFIlms); */



function detectPersonalLevel() {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if ( personalMovieDB.count > 9 && personalMovieDB.count < 31) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel();


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
  
    if (genre != null && genre != '') {
      personalMovieDB.genres.push(genre);
    } else {
      i--;
    }
  };
}

writeYourGenres();

