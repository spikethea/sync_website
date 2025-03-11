import Glide from '@glidejs/glide';

// interface ApiResponse {
//     data: string;
//     timestamp: number;
//   }

export default (element: HTMLDivElement) => {
    let carousel = null;
    let videos = null;

   
    //const tiktokData = myAsyncFunction('');

    // mySchema.parse({

    // })
    
    // CAROUSEL

    videos = element.querySelectorAll('video');
    console.log(videos);

    carousel = new Glide('.glide', {
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


        carousel.on('move.after', () => {
            videos[carousel.index].play();
            videos[carousel.index - 1].pause();
            videos[carousel.index + 1].pause();
        })
}