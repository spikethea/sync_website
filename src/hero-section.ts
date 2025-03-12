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

  window.onload = () => {
    if (!htmlBody) return;
    htmlBody.style.height = "unset";
    htmlBody.style.overflowY = "scroll";

    const options = {
      delay: 0.5,
      duration:1.5,
      ease: "bounce",
      opacity: 1
    }

    gsap.fromTo(video, {opacity: 0}, {...options});

    gsap.fromTo(logoTop, { x: (700/2)}, {...options, x: 0})
    gsap.fromTo(logoBottom,  {x: (-700/2)}, {...options, x: 0})
  };
}

