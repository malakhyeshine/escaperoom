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
var time = 3000;

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
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(timer5);
    clearTimeout(timer6);
    document.location.href = "https://carolinaalfaro.github.io/phase_08/escape_phase4.html";
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
  a.classList.remove('hideimage');
}

function hideImage(el) {
  a.classList.add('hideimage');
  timer1 = setTimeout (reappearImage, time);
}

function reappearImage2(el) {
  b.classList.remove('hideimage');
}

function hideImage2(el) {
  if (a.classList.contains("hideimage")) {
    console.log("its hidden");
    b.classList.add('hideimage');
    timer2 = setTimeout (reappearImage2, time);
    time += 500;
  }
  else {
    console.log("not hidden")
  }
}

function reappearImage3(el) {
  c.classList.remove('hideimage');
}

function hideImage3(el) {
  if (b.classList.contains("hideimage")) {
    console.log("its hidden");
    c.classList.add('hideimage');
    timer3 = setTimeout (reappearImage3, time);
    time += 500;
  }
  else {
    console.log("not hidden")
  }
}

function reappearImage4(el) {
  d.classList.remove('hideimage');
}

function hideImage4(el) {
  if (c.classList.contains("hideimage")) {
    console.log("its hidden");
    d.classList.add('hideimage');
    timer4 = setTimeout (reappearImage4, time);
    time += 1000;
  }
  else {
    console.log("not hidden")
  }
}

function reappearImage5(el) {
  e.classList.remove('hideimage');
}

function hideImage5(el) {
  if (d.classList.contains("hideimage")) {
    console.log("its hidden");
    e.classList.add('hideimage');
    timer5 = setTimeout (reappearImage5, time);
    time += 500;
  }
  else {
    console.log("not hidden")
  }
}

function reappearImage6(el) {
  f.classList.remove('hideimage');
}

function hideImage6(el) {
  if (e.classList.contains("hideimage")) {
    console.log("its hidden");
    f.classList.add('hideimage');
    timer6 = setTimeout (reappearImage6, time);
    time += 500;
  }
  else {
    console.log("not hidden")
  }
}
