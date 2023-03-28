/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addInput = addForm.querySelector('.adding__input'),
          inputFavorite = addForm.querySelector('input[type="checkbox"]');
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value,
              favorite = inputFavorite.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0,21)}...`;
            }

            if (favorite.checked == true) {
                console.log('It is favorite film');
            }

            movieDB.movies.push(newFilm); 
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film} <div class="delete"></div></li>
            `
        });

        movieList.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    };

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
})




