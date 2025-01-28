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

  document.addEventListener('DOMContentLoaded', () => {

    const options = {
      delay: 0.5,
      duration:1.5,
      ease: "bounce",
    }

    gsap.to(logoTop, {...options, xPercent: 50})
    gsap.to(logoBottom, {...options, xPercent: -50})
  });
}

