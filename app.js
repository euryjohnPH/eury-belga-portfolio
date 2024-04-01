window.onscroll = function() {stickyNav()};

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  if (window.pageYOffset === 0) {
    navbar.classList.remove('sticky');
  }
}