const animateElements = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  animateElements.forEach((element) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowScrollTop = window.scrollY;

    if (windowScrollTop > elementTop - windowHeight && windowScrollTop < elementTop + elementHeight) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
});