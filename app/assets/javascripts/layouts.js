
$(document).ready(function(){

  const navButton = document.getElementById('nav-button');
  const navMenu = document.getElementById('nav-menu');

  function toggleNav() {
    if (navMenu.style.paddingRight !== "100px"){
      navMenu.style.paddingRight = "100px";
    } else if (navMenu.style.paddingRight === "100px"){
      navMenu.style.paddingRight = "0px";
    };
  };

  navButton.addEventListener('click', toggleNav);
})
