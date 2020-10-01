window.onload = function(){ profile1(); }

var mybutton = document.getElementsByClassName("navBar")[0];

window.onscroll = function(){ scrollFunction(); }

function scrollFunction() {
  if (document.body.scrollTop > 752 || document.documentElement.scrollTop > 752) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

const topfunc = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}
const btnUp = document.getElementById("btnup");
btnUp.addEventListener("click", topfunc);


const profile1 = () => {
   document.body.scrollTop = 753;
   document.documentElement.scrollTop = 753;
}
const li1 = document.getElementById("li1");
li1.addEventListener("click", profile1);


const profile2 = () => {
   document.body.scrollTop = 1503;
   document.documentElement.scrollTop = 1503;
}
const li2 = document.getElementById("li2");
li2.addEventListener("click", profile2);


const profile3 = () => {
   document.body.scrollTop = 2253;
   document.documentElement.scrollTop = 2253;
}
const li3 = document.getElementById("li3");
li3.addEventListener("click", profile3);


const profile4 = () => {
   document.body.scrollTop = 3003;
   document.documentElement.scrollTop = 3003;
}
const li4 = document.getElementById("li4");
li4.addEventListener("click", profile4);


const profile5 = () => {
   document.body.scrollTop = 3753;
   document.documentElement.scrollTop = 3753;
}
const li5 = document.getElementById("li5");
li5.addEventListener("click", profile5);
