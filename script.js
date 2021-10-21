'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button =>
  button.addEventListener('click', openModalWindow)
);

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
//   btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

// Прокручивание страницы

btnScrollTo.addEventListener('click', function (e) {
  const section1Coords = section1.getBoundingClientRect();
  console.log(section1Coords);
  console.log(e.target.getBoundingClientRect());
  console.log(
    'Текущее прокручивание: x, y',
    window.pageXOffset,
    window.pageYOffset
  );
  console.log(
    'Ширина и высота viewport',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // window.scrollTo(
  //   section1Coords.left + window.pageXOffset,
  //   section1Coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: section1Coords.left + window.pageXOffset,
  //   top: section1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////
// Smooth page navigation

// document.querySelectorAll('.nav__link').forEach(function (htmlElement) {
//   htmlElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     console.log(href);
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Делегирование событий
// 1. Добавляем event listener для ОБЩЕГО родителя
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // 2. Определить target элемент
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const href = e.target.getAttribute('href');
    console.log(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////////

// Выбор элементов
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelector('.header'));
// const sections = document.querySelectorAll('.section');
// console.log(sections);

// console.log(document.getElementById('section--1'));
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// console.log(document.getElementsByClassName('btn'));

/////////////////////////////////////////////////
// Создание и вставка элементов
// .insertAdjacentHTML()

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'Мы используем на этом сайте cookie для улучшения функциональности.';
// message.innerHTML =
//   'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn--close-cookie">Ок!</button>';

// const header = document.querySelector('.header');
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Удаление элементов
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });

// // Стили

// message.style.backgroundColor = '#076785';
// message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 50 + 'px';
// console.log(message.style.height);

// document.documentElement.style.setProperty('--color-first', 'yellow');

// // Атрибуты
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);

// logo.alt = 'Лого Прекрасного Банка';

// // Нестандартный атрибут
// console.log(logo.developer);
// console.log(logo.getAttribute('developer'));
// logo.setAttribute('copyright', 'Masters Of Code');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes

// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('a', 'b');
// logo.classList.remove('a', 'b');
// logo.classList.toggle('a');
// logo.classList.contains('c');

// // Не использовать
// // logo.className = 'a';

/////////////////////////////////////////////////
// Виды Событий И Обработчиков Событий

// const h1 = document.querySelector('h1');
// // const alertMouseEnterH1 = function (e) {
// //   alert('addEventListener: You are now at the h1 element');
// //   h1.removeEventListener('mouseenter', alertMouseEnterH1);
// // };

// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: You are now at the h1 element');
// };
// h1.addEventListener('mouseenter', alertMouseEnterH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000);

// h1.onclick = function (e) {
//   alert('onclick: You have clicked the h1 element');
// };

///////////////////////////////////////
// Event Propagation
// rgb(123, 56, 78)

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// const getRandomColor = () =>
//   `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
//     0,
//     255
//   )}, ${getRandomIntInclusive(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Link', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Links', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = getRandomColor();
//     console.log('Nav', e.target, e.currentTarget);
//     console.log(this === e.currentTarget);
//   }
//   // , true
// );

// document.querySelector('body').addEventListener('click', function (e) {
//   this.style.backgroundColor = getRandomColor();
//   console.log('Body', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// });
