import Glide from '@glidejs/glide';

// interface ApiResponse {
//     data: string;
//     timestamp: number;
//   }

export default (element: HTMLDivElement) => {
    let carousel = null;
    let videos = null;

    

    const options = {
        root: null
    };

    videos = element.querySelectorAll('video');
    console.log(videos);

    videos.forEach((video) => {
        const glide__slide = video.closest('.glide__slide');
        if (!glide__slide) return;
        video.addEventListener('pause', () => {
            glide__slide.classList.add('paused')
        })

        video.addEventListener('play', () => {
            glide__slide.classList.remove('paused')
        })

        video.addEventListener('click', () => {
            if (video.paused && glide__slide.classList.contains('glide__slide--active')) {
                video.play();
            } else {
                video.pause()
            }
            
        })
    })

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
                peek: 50
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

    videos[carousel.index].pause();

    // Interaction Observer
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                videos[carousel.index].play();
            } else {
                videos[carousel.index].pause();
            }
            });
    },options);
    observer.observe(element);


        carousel.on('run.after', () => {
            videos.forEach(video => video.pause())
            videos[carousel.index].play();
            
        })
}