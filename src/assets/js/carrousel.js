var desktop = 1025;
var carrousel = document.getElementById("carrousel");
var figures = carrousel.querySelectorAll(".books__book");
var left = document.getElementById("leftSlide");
var right = document.getElementById("rightSlide");
var max = figures.length;
var book_tab = [0, 1, 2];

WindowSize();

function WindowSize() {
  var larg = document.body.clientWidth;
  if (larg >= desktop) {
    slide();
  } else {
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
      } //Petit souci à régler
    }
  }
}

function booksToShowLeft() {
  for (let i = 0; i < book_tab.length; i++) {
    if (book_tab[i] <= 0) {
      book_tab[i] = 8;
      console.log(book_tab[i]);
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
