a = document.getElementById("alien1");
b = document.getElementById("alien2");
c = document.getElementById("alien3");
d = document.getElementById("alien4");
e = document.getElementById("alien5");
f = document.getElementById("alien6");
g = document.getElementById("circle");
h = document.getElementById("circle2");
i = document.getElementById("circle3");
j = document.getElementById("circle4");
k = document.getElementById("circle5");
l = document.getElementById("circle6");
var time = 10000;

function closeAll() {
  if (a.classList.contains("hideimage") && b.classList.contains("hideimage") && c.classList.contains("hideimage") && d.classList.contains("hideimage") && e.classList.contains("hideimage") && f.classList.contains("hideimage")) {
    console.log("match");
    a.classList.add("hideimage");
    b.classList.add("hideimage");
    c.classList.add("hideimage");
    d.classList.add("hideimage");
    e.classList.add("hideimage");
    f.classList.add("hideimage");
    g.classList.add("darkblue");
    h.classList.add("darkblue");
    i.classList.add("darkblue");
    j.classList.add("darkblue");
    k.classList.add("darkblue");
    l.classList.add("darkblue");
    time -= 10000;
  }
  else {
    console.log("no match")
    g.classList.add("darkblue");
    h.classList.add("darkblue");
    i.classList.add("darkblue");
    j.classList.add("darkblue");
    k.classList.add("darkblue");
    l.classList.add("darkblue");
    setTimeout(darkBlue, 300);
  }
}

function darkBlue(){
  g.classList.remove("darkblue");
  h.classList.remove("darkblue");
  i.classList.remove("darkblue");
  j.classList.remove("darkblue");
  k.classList.remove("darkblue");
  l.classList.remove("darkblue");
}

function reappearImage(el) {
  var element = document.getElementById('alien1');
  element.classList.remove('hideimage')
}

function hideImage(el) {
  var element = document.getElementById("alien1");
  element.classList.add('hideimage')
  setTimeout (reappearImage, time);
}

function reappearImage2(el) {
  var element = document.getElementById('alien2');
  element.classList.remove('hideimage')
}

function hideImage2(el) {
  var element = document.getElementById("alien2");
  element.classList.add('hideimage')
  setTimeout (reappearImage2, time);
}

function reappearImage3(el) {
  var element = document.getElementById('alien3');
  element.classList.remove('hideimage')
}

function hideImage3(el) {
  var element = document.getElementById("alien3");
  element.classList.add('hideimage')
  setTimeout (reappearImage3, time);
}

function reappearImage4(el) {
  var element = document.getElementById('alien4');
  element.classList.remove('hideimage')
}

function hideImage4(el) {
  var element = document.getElementById("alien4");
  element.classList.add('hideimage')
  setTimeout (reappearImage4, time);
}

function reappearImage5(el) {
  var element = document.getElementById('alien5');
  element.classList.remove('hideimage')
}

function hideImage5(el) {
  var element = document.getElementById("alien5");
  element.classList.add('hideimage')
  setTimeout (reappearImage5, time);
}

function reappearImage6(el) {
  var element = document.getElementById('alien6');
  element.classList.remove('hideimage')
}

function hideImage6(el) {
  var element = document.getElementById("alien6");
  element.classList.add('hideimage')
  setTimeout (reappearImage6, time);
}
