import Glide from '@glidejs/glide';

export default (element: HTMLDivElement) => {
    let videoReelCarousel = null;
    videoReelCarousel = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        gap: 40,
        perView: 3,
        focusAt: 'center',
        breakpoints: {
            480: {
                perView: 1,
                gap:10,
                peek: 20
            },
            820: {
                perView: 2,
                gap: 40,
                peek: 0
            }
    
        }
        }).mount();

        // window.addEventListener('resize', () => {
        //     videoReelCarousel.mount()
        // });
}