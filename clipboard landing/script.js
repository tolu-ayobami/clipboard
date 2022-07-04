var teg = document.querySelector(".ham");

var tega = document.querySelector(".links");


var close = document.querySelector(".close");


teg.addEventListener("click", function(){
    tega.classList.add("okay");
});

close.addEventListener("click", function(){
    tega.classList.remove("okay");

});




var all = document.querySelector(".tv");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = all.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    all.classList.add("scrolled");
  }
});




var al = document.querySelector(".fero");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = al.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    al.classList.add("scroll");
  }
});



var a = document.querySelector(".svg");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = a.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    a.classList.add("scrol");
  }
});


var b = document.querySelector(".wed");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = b.getBoundingClientRect().top;
  if (scrollHeight > navHeight) {
    b.classList.add("scro");
  }
});