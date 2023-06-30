function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.header-paralax h1');
    scrollPos = window.scrollY;
  
    if (scrollPos <= 6000) {
      headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
      headerText.style.opacity = 1 - (scrollPos / 60000);
    }
  }
  window.addEventListener('scroll', scrollBanner);
  