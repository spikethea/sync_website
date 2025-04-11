import { gsap } from "gsap";

// export default function setupCounter(element: HTMLElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

export default (element: HTMLElement) => {
  const logoTop = element.querySelector('#sync_logo_top');
  const logoBottom = element.querySelector('#sync_logo_bottom');
  const video = element.querySelector('video');
  const htmlBody = document.querySelector('body');
  const splashScreen : HTMLElement| null = document.querySelector('#splash-screen');
  const readyInterval = setInterval( function () {
    if ( video && video.readyState === 4 ) {
      if (!htmlBody || !splashScreen) return;

      //ready to start page
      clearInterval(readyInterval);

      htmlBody.classList.remove('no-scroll')
      splashScreen.classList.add('hidden')

      const options = {
        delay: 1.5,
        duration: 0.7,
        ease: "bounce",
        opacity: 1
      }

      gsap.fromTo(video, {opacity: 0}, {...options});

      gsap.fromTo(logoTop, { x: (700/2)}, {...options, x: 0})
      gsap.fromTo(logoBottom,  {x: (-700/2)}, {...options, x: 0})
    };
  }, 150);
}
