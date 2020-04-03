var home_picture = document.getElementsByClassName("homePicture");
var backgrounds = [
  "cover_1.03a44af1.jpg",
  "cover_2.f3490ae1.jpg",
  "cover_3.2a102c69.jpg",
  "cover_4.46975ba0.jpg"
];
var nb = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function bg() {
  for (let i = 0; i < home_picture.length; i++) {
    if (nb >= backgrounds.length) {
      nb = 0;
      home_picture[i].style.background = "url('/" + backgrounds[nb] + "')";
      home_picture[i].style.backgroundSize = "100% 100%";
      nb++;
    } else {
      home_picture[i].style.background = "url('/" + backgrounds[nb] + "')";
      home_picture[i].style.backgroundSize = "100% 100%";
      nb++;
    }
  }
  console.log(nb);
}

bg();

setInterval(bg, 5000);
