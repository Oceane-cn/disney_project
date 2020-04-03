//Variables pour le carrousel

var desktop = 1025;
var carrousel = document.getElementById("carrousel");
var figures = carrousel.querySelectorAll(".books__book");
var left = document.getElementById("leftSlide");
var right = document.getElementById("rightSlide");
var max = figures.length;
var book_tab = [0, 1, 2];

//Variables pour montrer et cacher les informations des livres

var more = document.getElementsByClassName("book__more");
var infos = document.getElementsByClassName("book__informations");
var books_carrousel = document.getElementsByClassName("books__book");
var close = document.getElementsByClassName("close");
var active = 0;

WindowSize();

function WindowSize() {
  console.log(active);
  var larg = document.body.clientWidth;
  if (larg >= desktop && active != 1) {
    slide();
  } else if (active != 1) {
    console.log("coucou");
    for (let i = 0; i < max; i++) {
      figures[i].classList.remove("hidden");
      if (figures[i].classList.contains("books__biger")) {
        figures[i].classList.remove("books__biger");
      }
    }
  }
}

function slide() {
  for (let i = 0; i < max; i++) {
    figures[i].classList.add("hidden");
    if (figures[i].classList.contains("books__biger")) {
      figures[i].classList.remove("books__biger");
    }
    for (let j = 0; j <= book_tab.length; j++) {
      if (i === book_tab[j]) {
        figures[i].classList.remove("hidden");
      }
      if (i === book_tab[1]) {
        figures[i].classList.add("books__biger");
      }
    }
  }
}

function booksToShowLeft() {
  for (let i = 0; i < book_tab.length; i++) {
    if (book_tab[i] <= 0) {
      book_tab[i] = 8;
    } else {
      book_tab[i]--;
    }
  }

  slide();
}

function booksToShowRight() {
  for (let i = 0; i < book_tab.length; i++) {
    if (book_tab[i] >= figures.length - 1) {
      book_tab[i] = 0;
    } else {
      book_tab[i]++;
    }
  }
  slide();
}

left.addEventListener("click", booksToShowLeft);
right.addEventListener("click", booksToShowRight);

window.onresize = WindowSize;

//Fonctions pour montrer et cacher les informations des livres

function show_more(e) {
  let book = e.target.closest(".books__book");
  let id = book.id;
  active = 1;

  for (let j = 0; j < infos.length; j++) {
    if (infos[j].classList.contains(id)) {
      infos[j].classList.add("active");
    }
  }

  hide_books();
  left.style.display = "none";
  right.style.display = "none";
}

function close_book(e) {
  let current_book = e.target.closest(".informations");
  current_book.classList.remove("active");

  show_books();

  active = 0;
}

function show_books() {
  var larg = document.body.clientWidth;
  if (larg >= desktop) {
    slide();
    left.style.display = "inline-block";
    right.style.display = "inline-block";
  } else {
    for (let k = 0; k < books_carrousel.length; k++) {
      books_carrousel[k].classList.remove("hidden");
    }
  }
}

function hide_books() {
  for (let k = 0; k < books_carrousel.length; k++) {
    books_carrousel[k].classList.add("hidden");
  }
}

//Event listener pour affichage des informations d'un livre
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", show_more);
}

//Event listener pour fermeture des informations d'un livre
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", close_book);
}
