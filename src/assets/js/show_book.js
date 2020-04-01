var more = document.getElementsByClassName("book__more");
var infos = document.getElementsByClassName("book__informations");
var books_carrousel = document.getElementsByClassName("books__book");
var close = document.getElementsByClassName("close");

function show_more(e) {
  let book = e.target.closest(".books__book");
  let id = book.id;

  for (let j = 0; j < infos.length; j++) {
    if (infos[j].classList.contains(id)) {
      infos[j].classList.add("active");
      console.log("coucou");
    }
  }

  hide_books();
}

function close_book(e) {
  let current_book = e.target.closest(".informations");
  current_book.classList.remove("active");

  show_books();
}

function show_books() {
  for (let k = 0; k < books_carrousel.length; k++) {
    books_carrousel[k].classList.remove("hidden");
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
