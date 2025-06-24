import './sass/style.scss'
import heroSection from './hero-section';
import contactForm from './contact-form';
import videoReel from './video-reel';
import navigation from './navigation';


// Scrollbar width calculation
var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
if(scrollbarWidth > 0) {
  document.documentElement.style.setProperty (
    '--scrollbarWidth',
    scrollbarWidth + 'px'
  );
}

const navigationElement = document.getElementById('navigation-menu');
const navigationBtn = document.getElementById("navigation-btn");

if (navigationElement || navigationBtn) {
  
  navigation(navigationElement, navigationBtn);
}

const heroSectionDiv = document.getElementById("hero");

if (heroSectionDiv) {
    heroSection(heroSectionDiv);
}

const contactFormDiv = document.getElementById("get-in-touch");

if (contactFormDiv) {
    contactForm(contactFormDiv)
}

const videoReelDiv = document.querySelector(".video-reel") as HTMLDivElement;

if (videoReelDiv) {
    videoReel(videoReelDiv);
}

