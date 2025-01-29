import './style.scss'
import heroSection from './hero-section';
import contactForm from './contact-form';
import videoReel from './video-reel';


// Scrollbar width calculation
var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
if(scrollbarWidth > 0) {
  document.documentElement.style.setProperty (
    '--scrollbarWidth',
    scrollbarWidth + 'px'
  );
}

const heroSectionDiv = document.getElementById("hero");

if (heroSectionDiv) {
    heroSection(heroSectionDiv);
}

const contactFormDiv = document.getElementById("get-in-touch");

if (contactFormDiv) {
    contactForm(contactFormDiv)
}

const videoReelDiv = document.querySelector(".video-reel");

if (videoReelDiv) {
    videoReel(videoReelDiv);
}