let video = document.getElementById('video');
let muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', function() {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'UnMute' : 'Mute';
});

// const animateElements = document.querySelectorAll('.animate');

// window.addEventListener('scroll', () => {
//   animateElements.forEach((element) => {
//     const elementTop = element.offsetTop;
//     const elementHeight = element.offsetHeight;
//     const windowHeight = window.innerHeight * 1.3; // increase the viewport to 1.5 times the window height
//     const windowScrollTop = window.scrollY;

//     if (windowScrollTop > (elementTop + elementHeight - windowHeight)) {
//       element.classList.add('active');
//     } else {
//       element.classList.remove('active');
//     }
//   });
// });

// --------------------------------------------------
// const animateElements = document.querySelectorAll('.animate');

// const animationDurations = {
//   '.game': 1200, // 1 second
//   '.game1': 1500, // 1.5 seconds
//   '.about-us': 3000, // 2 seconds
//   '.join-us': 2500, // 2.5 seconds
//   // Add more elements and durations as needed
// };

// window.addEventListener('scroll', () => {
//   animateElements.forEach((element) => {
//     const elementTop = element.offsetTop;
//     const elementHeight = element.offsetHeight;
//     const windowHeight = window.innerHeight * 1.3;
//     const windowScrollTop = window.scrollY;

//     if (windowScrollTop > (elementTop + elementHeight - windowHeight)) {
//       const duration = animationDurations[`.${element.classList[0]}`];
//       element.classList.add('active');
//       element.style.transitionDuration = `${duration}ms`;
//     } else {
//       element.classList.remove('active');
//     }
//   });
// });
// -------------------------------------------------------------
const animateElements = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  animateElements.forEach((element) => {
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    let windowHeight;

    if (element.classList.contains('game')) {
      windowHeight = window.innerHeight * 1.4; // 1.5 times the window height for .game elements
    } else if (element.classList.contains('game1')) {
      windowHeight = window.innerHeight * 1.3; // 1.2 times the window height for .game1 elements
    } else if (element.classList.contains('join-us')) {
      windowHeight = window.innerHeight * 1.2; // 1.2 times the window height for .game1 elements
    } else {
      windowHeight = window.innerHeight; // default window height for other elements
    }
    

    const windowScrollTop = window.scrollY;

    if (windowScrollTop > (elementTop + elementHeight - windowHeight)) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
});