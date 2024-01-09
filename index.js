var i = 0;
var txt = ["I'm Khushboo , Whether you're here to discover my projects, explore my skills, you're in the right place."];
var speed = 50;

function typeWriter() {
  if (i < txt[0].length) {
    document.getElementById("demo").innerHTML += txt[0].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();