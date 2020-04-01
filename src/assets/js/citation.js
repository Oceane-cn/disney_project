var citation = document.getElementById("citation");
var citations = [
  "”Remember, you’re the one who can fill the world with sunshine” - Snow White",
  "“If you keep on believing, the dream that you wish will come true.” - Cinderella",
  "“Love is putting someone else’s needs before your own.” - Frozen",
  "“If you dream a thing more than once, it’s sure to come true.” - Sleeping Beauty",
  "“Love doesn’t have to be perfect. It just needs to be true.” - Beauty and the Beast",
  "“Today’s special moments are tomorrow’s memories” - Aladdin",
  "“Ohana means family. Family means nobody gets left behind.” - Lilo & Stitch",
  "“If you can’t say something nice, don’t say nothing at all.” – Bambi",
  "“Ladies don’t start fights, but they can finish them!” - The Aristocats"
];
var count = 1;

function change_citation() {
  if (count >= citations.length) {
    count = 0;
    citation.innerHTML =
      "<p class='description__citation'>" + citations[count] + "</p>";
    citation.classList.add("active");
    count++;
  } else {
    citation.innerHTML =
      "<p class='description__citation'>" + citations[count] + "</p>";
    count++;
  }
}

setInterval(change_citation, 3000);
