/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = prompt('How many films did you see?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('How many films did you see?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const filmName = prompt('Last film?', ''),
          filmRaiting = prompt('Raiting?', '');
    
      if (filmName != null && filmRaiting != null && filmName != '' && filmRaiting != '' && filmName.length < 51) {
        personalMovieDB.movies[filmName] = filmRaiting;
      } else {
        i--;
      }
    };
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if ( personalMovieDB.count > 9 && personalMovieDB.count < 31) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      // if (genre != null && genre != '') {
      //   personalMovieDB.genres.push(genre);
      // } else {
      //   i--;
      // }

      let genres = prompt(`Ваші улюблені жанри через кому`).toLowerCase();
      if (genres === null || genres === '') {
        console.log('empty string');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
        
      }
    }

    personalMovieDB.genres.forEach((item, i, arr) => {
      console.log(`${i + 1}: ${item}`)
    });
  }
}